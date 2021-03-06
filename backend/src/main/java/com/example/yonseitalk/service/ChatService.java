package com.example.yonseitalk.service;

import com.example.yonseitalk.domain.*;

import java.util.List;

public interface ChatService {
    //채팅방 추가
    Long addChatroom(String user_1_id, String user_2_id);

    //채팅방 리스트 구하기 (채팅창이 만들어졌어도 메시지가 한번도 안보내진 채팅방은 안보이게 구현을 했다)
    List<ChatroomDetail> findChatroom(String user_id);
    Long getMessageCount(Long chatroom_id);
    List<Message> messageInquiry(Long chatroom_id, String user_id);
//    Message readMessage(Long message_id, User user);
    String transformContent(Message message, User user);
    String transformContent(ChatroomDetail chatroomDetail, User user);
    Long sendMessage(String user_id , Long chatroom_id, String content, Long rendezvous_time);
}
