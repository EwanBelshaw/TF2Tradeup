package com.TF2Tradeup.Backend.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateBlogResponseDto {
    private UUID id;
    private String title;
    private String description;
    private String content;
    // TODO: private byte[] thumbnail;
    // TODO: private Tag tag;

}
