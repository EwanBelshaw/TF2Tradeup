package com.TF2Tradeup.Backend.mappers;

import com.TF2Tradeup.Backend.dtos.CreateBlogResponseDto;
import com.TF2Tradeup.Backend.entities.blog.Blog;
import com.TF2Tradeup.Backend.requests.CreateBlogRequest;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BlogMapper {
    CreateBlogRequest fromDto(CreateBlogRequest createBlogRequest);
    CreateBlogResponseDto toDto(Blog blog);
}
