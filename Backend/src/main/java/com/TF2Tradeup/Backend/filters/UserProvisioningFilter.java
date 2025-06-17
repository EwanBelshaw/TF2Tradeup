package com.TF2Tradeup.Backend.filters;

import com.TF2Tradeup.Backend.entities.user.User;
import com.TF2Tradeup.Backend.repositories.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class UserProvisioningFilter extends OncePerRequestFilter {

    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException
    {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null && authentication.isAuthenticated() && authentication.getPrincipal() instanceof Jwt jwt) {
            UUID keycloakId = UUID.fromString(jwt.getSubject());


            // If user doesnt exist --> Create a new user.
            if(userRepository.existsById(keycloakId)) {
                User user = new User();
                user.setId(keycloakId);
                user.setUsername(jwt.getClaimAsString("preferred_username"));
                user.setEmail(jwt.getClaimAsString("email"));
                userRepository.save(user); // Saves user within the database
            }
        }

        // Continues filter chain
        filterChain.doFilter(request, response);
    }
}
