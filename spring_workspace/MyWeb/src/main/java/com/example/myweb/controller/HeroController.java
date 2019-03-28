package com.example.myweb.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.myweb.dao.HeroDAO;
import com.example.myweb.dto.HeroDto;
@CrossOrigin(origins="http://localhost:4200")   //
@RestController
public class HeroController {
	public static final Logger logger = LoggerFactory.getLogger(HeroController.class);
	@Autowired
	HeroDAO heroDAO;
	
	@RequestMapping("/hero/list")
	public List<HeroDto> getList(){
		logger.info("hello");
		return heroDAO.getHeroList();
	}
	
	@RequestMapping("/hero/{id}")
	public HeroDto getHero(@PathVariable("id") int id) {
		logger.info("get param : {}",id);
		return heroDAO.getHero(id);
	}
	
	@RequestMapping("/hero/save")
	public HeroDto saveHero(@RequestBody HeroDto heroDto) {
		logger.info("save param : {}",heroDto);
		heroDAO.insert(heroDto);
		return heroDto;
	}
	
	@RequestMapping(value = "/hero/update", method=RequestMethod.PUT)
	public HeroDto updateHero(@RequestBody HeroDto heroDto) {
		logger.info("update param : {}",heroDto);
		heroDAO.update(heroDto);
		return heroDto;
	}
	
	@RequestMapping(value ="/hero/delete/{id}" , method=RequestMethod.DELETE)
	public HeroDto deleteHero(@PathVariable("id") int id) {
		logger.info("delete param : {}",id);
		heroDAO.delte(id);
		return null;
	}
}
