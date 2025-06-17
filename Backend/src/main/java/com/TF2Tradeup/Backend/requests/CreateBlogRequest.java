package com.TF2Tradeup.Backend.requests;

import com.TF2Tradeup.Backend.entities.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateBlogRequest {
    private String title;
    // private User author; // Maybe omit
    private String description;
    private String content;
    // TODO: Add tags and image support
}
