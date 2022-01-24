package com.example.yonseitalk.repository;

import com.example.yonseitalk.web.friend.dao.DBFriendRepository;
import com.example.yonseitalk.web.friend.dao.DBFriendUserRepository;
import com.example.yonseitalk.web.friend.dao.Friend;
import com.example.yonseitalk.web.user.dto.FriendUser;
import com.example.yonseitalk.web.user.dao.User;
import com.example.yonseitalk.web.user.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

import static org.assertj.core.api.Assertions.*;


@SpringBootTest
@Transactional
class DBFriendUserRepositoryTest {

    @Autowired
    private DBFriendRepository dbFriendRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private DBFriendUserRepository dbFriendUserRepository;

    @Test
    void findAllTest() {

        //given

        User user1 = User.builder()
                .userId("tt")
                .name("jihoon")
                .password("ddda")
                .statusMessage("hihi")
                .type("학생")
                .userLocation("공학관")
                .connectionStatus(true)
                .build();

        User user2 = User.builder()
                .userId("nam")
                .name("jihoon")
                .password("ddda")
                .statusMessage("hihi")
                .type("일반")
                .userLocation("공학관")
                .connectionStatus(true)
                .build();

        User user3 = User.builder()
                .userId("pp")
                .name("jihoon")
                .password("ddda")
                .statusMessage("hihi")
                .type("강사")
                .userLocation("공학관")
                .connectionStatus(false)
                .build();


        Friend friend1=new Friend();
        friend1.setFriendId("nam");
        friend1.setUserId("tt");


        Friend friend2 =new Friend();
        friend2.setFriendId("pp");
        friend2.setUserId("tt");

        //when
        userService.save(user1);
        userService.save(user2);
        userService.save(user3);


        dbFriendRepository.save(friend1);
        dbFriendRepository.save(friend2);

        //then
        List<FriendUser> friends = dbFriendUserRepository.findAll(user1.getUserId());
        assertThat(friends.size()).isEqualTo(2);
        assertThat(friends.stream().map(FriendUser::getUserId)).contains("pp");
        assertThat(friends.stream().map(FriendUser::getUserId)).contains("nam");
        assertThat(friends.stream().map(FriendUser::getChatroomId)).containsNull();
        assertThat(friends.stream().map(FriendUser::getUserLocation)).contains("공학관");
    }




}