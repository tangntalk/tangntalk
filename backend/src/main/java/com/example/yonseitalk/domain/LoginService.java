package com.example.yonseitalk.domain;

import com.example.yonseitalk.repository.DBUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final DBUserRepository dbUserRepository;

    public User login(String loginId, String password){

        return dbUserRepository.findById(loginId).filter(m->m.getPassword().equals(password)).orElse(null);

    }
}