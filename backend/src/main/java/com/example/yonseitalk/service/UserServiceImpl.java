package com.example.yonseitalk.service;

import com.example.yonseitalk.AES128;
import com.example.yonseitalk.domain.Role;
import com.example.yonseitalk.domain.User;
import com.example.yonseitalk.domain.user.UserRegisterRequest;
import com.example.yonseitalk.exception.DuplicateAccountException;
import com.example.yonseitalk.repository.UserRepository;
import javassist.bytecode.DuplicateMemberException;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Transactional
    public void save(User user){
        userRepository.save(user);
    }

    @Override
    @Transactional
    public User save(UserRegisterRequest userRegisterRequest) {

        userRepository.findById(userRegisterRequest.getUser_id())
                .ifPresent(user -> {throw new DuplicateAccountException();});

        userRegisterRequest.setPassword(AES128.getAES128_Encode(userRegisterRequest.getPassword()));
        User user = userRegisterRequest.toEntity();
        user.setConnection_status(false);
        user.setStatus_message("");
        user.setUser_location("공학관");
        user.setRole(Role.USER.getValue());
        userRepository.save(user);
        return user;
    }

    @Transactional
    public Optional<User> findById(String id){
        return userRepository.findById(id);
    }

    @Transactional
    public void deleteById(String id){
        userRepository.deleteById(id);
    }

    @Transactional
    public List<User> findByLocation(String location){
        return userRepository.findByLocation(location);
    }

    @Transactional
    public int updateStatusMessage(String id, String msg){
        Optional<User> userOptional = userRepository.findById(id);

        userOptional.ifPresent(user -> user.setStatus_message(msg));

        if(userOptional.isPresent()){
            return 1;
        }
        else{
            return 0;
        }
    }
    @Transactional
    public int updateUserConnectionStatus(String id, Boolean flag){
        Optional<User> userOptional = userRepository.findById(id);

        userOptional.ifPresent(user -> user.setConnection_status(flag));

        if(userOptional.isPresent()){
            return 1;
        }
        else{
            return 0;
        }
    }

    @Transactional
    public int updateUserLocation(String id, String location){
        Optional<User> userOptional = userRepository.findById(id);

        userOptional.ifPresent(user -> user.setUser_location(location));

        if(userOptional.isPresent()){
            return 1;
        }
        else{
            return 0;
        }
    }



}
