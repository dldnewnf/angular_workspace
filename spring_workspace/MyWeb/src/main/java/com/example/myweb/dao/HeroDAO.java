package com.example.myweb.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.myweb.dto.HeroDto;

@Repository
public class HeroDAO {
	List<HeroDto> heroList = new ArrayList<HeroDto>();
	
	public HeroDAO() {
		heroList.add(new HeroDto(1,"이순신", "죽음을 알리지 않음"));
		heroList.add(new HeroDto(2,"가나다", "ㅁㄴㅇㄹ"));
		heroList.add(new HeroDto(3,"라마바", "2222음"));
		heroList.add(new HeroDto(4,"사아자", "333 알리지 않음"));
		heroList.add(new HeroDto(5,"차카타", "44을 알리지 않음"));
		heroList.add(new HeroDto(6,"파하", "죽55 알리지 않음"));
		heroList.add(new HeroDto(7,"에이비", "665을 알리지 않음"));
		heroList.add(new HeroDto(8,"씨디이", "777을 알리지 않음"));
		heroList.add(new HeroDto(9,"레프쥐", "888을 알리지 않음"));
		heroList.add(new HeroDto(10,"에이히", "999을 알리지 않음"));
	}

	public List<HeroDto> getHeroList() {
		return heroList;
	}

	public void setHeroList(List<HeroDto> heroList) {
		this.heroList = heroList;
	}
	
	public int getPos(int id) {
		for(int i=0; i<heroList.size(); i++) {
			if(heroList.get(i).getId()==id) {
				return i;  //있으면 위치값 반환
			}
		}
		return 0; // 없으면 -1반환
	}
	
	public HeroDto getHero(int id) {
		return heroList.get(getPos(id));
	}
	
	//추가하기
	public void insert(HeroDto dto) {
		//마지막 데이터의 id + 1을 한다
		int nextId = heroList.get(heroList.size()-1).getId()+1;
		dto.setId(nextId);
		this.heroList.add(dto);
	}
	
	//수정하기
	public void update(HeroDto dto) {
		int nPos = getPos(dto.getId());//수정될 위치값 찾기
		heroList.get(nPos).setName(dto.getName());
		heroList.get(nPos).setDescription(dto.getDescription());
	}
	
	//삭제하기
	public void delte(int id) {
		heroList.remove(getPos(id));
	}
}
