package com.example.yonseitalk.domain;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class Chatroom {
    private Long chatroom_id;
    private String user_1;
    private String user_2;
    private Long last_message_id;
}
