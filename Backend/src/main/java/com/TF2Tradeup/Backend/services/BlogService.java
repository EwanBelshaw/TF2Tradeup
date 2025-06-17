package com.TF2Tradeup.Backend.services;

import com.TF2Tradeup.Backend.entities.blog.Blog;
import com.TF2Tradeup.Backend.requests.CreateBlogRequest;

import java.util.UUID;

public interface BlogService {
    Blog createBlog(UUID authorId, CreateBlogRequest blog);
}
