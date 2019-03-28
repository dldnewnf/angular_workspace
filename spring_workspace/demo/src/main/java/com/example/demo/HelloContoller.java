package com.example.demo;

import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloContoller {
	@RequestMapping("/hello")
	public String hello() {
		return "Hello Spring Boot";
	}
	//127.0.0.1:8080/hello2
	@RequestMapping("/hello2")
	public HashMap<String, String> hello2(){
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("id", "1");
		map.put("name","이순신" );
		map.put("description", "거북");
		return map;
	}
}
