package com.TF2Tradeup.Backend.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateBlogRequestDto {
    @NotBlank(message = "Title is required")
    private String title;

    private String description;

    // Require minimum one tag.

    @NotBlank(message = "Content is required")
    private String content;
}
