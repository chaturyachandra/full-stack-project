package com.example.supermarket_backend.controller;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import com.example.supermarket_backend.Model.Cart;
import com.example.supermarket_backend.Model.LoginDTO;
import com.example.supermarket_backend.Model.RegisterDTO;
import com.example.supermarket_backend.Model.UserModel;
import com.example.supermarket_backend.repository.UserRepo;
import com.example.supermarket_backend.service.UserService;
import com.nimbusds.jose.jwk.source.ImmutableSecret;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepo repository;

    private final AuthenticationManager authenticationManager;

    public UserController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@Valid @RequestBody RegisterDTO registerDto, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorsMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        BCryptPasswordEncoder bCryptEncoder = new BCryptPasswordEncoder();
        UserModel userModel = new UserModel();

        userModel.setUsername(registerDto.getUsername());
        userModel.setEmail(registerDto.getEmail());
        userModel.setCart(new Cart());
        userModel.setRole(registerDto.getRole());
        userModel.setPassword(bCryptEncoder.encode(registerDto.getPassword()));

        try {
            if (repository.findByUsername(registerDto.getUsername()) != null) {
                return ResponseEntity.badRequest().body("Username already exists");
            }
            if (repository.findByEmail(registerDto.getEmail()) != null) {
                return ResponseEntity.badRequest().body("Email already exists");
            }

            repository.save(userModel);

            String jwtToken = createJwtToken(userModel);
            Map<String, Object> response = new HashMap<>();
            response.put("token", jwtToken);
            response.put("user", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration");
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> profile(Authentication auth) {
        Map<String, Object> response = new HashMap<>();
        response.put("Username", auth.getName());
        response.put("Authorities", auth.getAuthorities());

        UserModel appUser = repository.findByUsername(auth.getName());
        response.put("User", appUser);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@Valid @RequestBody LoginDTO loginDto, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorsMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword())
            );
            UserModel userModel = repository.findByUsername(loginDto.getUsername());

            String jwtToken = createJwtToken(userModel);
            Map<String, Object> response = new HashMap<>();
            response.put("token", jwtToken);
            response.put("user", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad username or password");
        }
    }

    @DeleteMapping("/delete/{id}")
    public UserModel delProduct(@PathVariable int id) {
        return userService.clearCart(id);
    }

    @GetMapping("/{id}")
public ResponseEntity<UserModel> getUserById(@PathVariable int id) {
    return userService.getUserById(id)
            .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
}
    @Value("${security.jwt.secret-key}")
    private String jwtSecretKey;

    @Value("${security.jwt.issuer}")
    private String jwtIssuer;

    private String createJwtToken(UserModel userModel) {
        Instant now = Instant.now();

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer(jwtIssuer)
                .issuedAt(now)
                .expiresAt(now.plusSeconds(24 * 3600))
                .subject(userModel.getUsername())
                .claim("role", userModel.getRole())
                .build();

        var encoder = new NimbusJwtEncoder(new ImmutableSecret<>(jwtSecretKey.getBytes()));

        var params = JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(), claims);

        return encoder.encode(params).getTokenValue();
    }
}
