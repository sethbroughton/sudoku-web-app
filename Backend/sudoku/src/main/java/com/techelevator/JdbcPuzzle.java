package com.techelevator;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class JdbcPuzzle implements PuzzleDao {
	
	
//	private JdbcTemplate jdbcTemplate;
	
//	@Autowired
//	public JdbcPuzzle(DataSource dataSource) {
//		this.jdbcTemplate = new JdbcTemplate(dataSource);
//	}

	@Override
	public Puzzle getRandomPuzzle() {
		Puzzle myPuzzle = new Puzzle();
		int[][] values = new int[][] {
				{5,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
				{0,0,0,0,0,0,0,0,0},
		};
		
		myPuzzle.setValues(values);
		return myPuzzle;
	}

}
