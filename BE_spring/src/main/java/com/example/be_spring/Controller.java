package com.example.be_spring;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @CrossOrigin(origins = "https://localhost:4200")
    @GetMapping("/hello")
    public String getHelloWorld(@RequestParam(value="myName", defaultValue="World") String name){
        return String.format("Hello %s!", name);
    }
}
