package com.TF2Tradeup.Backend.services.impl;


import com.TF2Tradeup.Backend.entities.blog.Blog;
import com.TF2Tradeup.Backend.entities.user.User;
import com.TF2Tradeup.Backend.repositories.UserRepository;
import com.TF2Tradeup.Backend.requests.CreateBlogRequest;
import com.TF2Tradeup.Backend.services.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {


    private final UserRepository userRepository;

    @Override
    public Blog createBlog(UUID authorId, CreateBlogRequest blog){
        User author = userRepository.findById(authorId)
                .orElseThrow(()-> new UsernameNotFoundException(
                        String.format("User with ID '%s' not found", authorId)
                ));
        Blog blogToCreate = new Blog();
        blogToCreate.setTitle(blog.getTitle());
        blogToCreate.setAuthor(author);
        blogToCreate.setContent(blog.getContent());
        blogToCreate.setDescription(blog.getDescription());
        return null;
    }
}
