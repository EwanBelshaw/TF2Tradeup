package com.TF2Tradeup.Backend.repositories;

import com.TF2Tradeup.Backend.entities.blog.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BlogRepository extends JpaRepository<Blog, UUID> {

}
