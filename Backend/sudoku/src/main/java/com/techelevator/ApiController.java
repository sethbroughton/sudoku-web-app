package com.techelevator;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@CrossOrigin
public class ApiController {
	
	@Autowired
	PuzzleDao puzzleDao;

	@GetMapping("/api/puzzle")
	public Puzzle getRandomPuzzle() {
		
		Puzzle myPuzzle = puzzleDao.getRandomPuzzle();
		
		return myPuzzle;
	}
}
