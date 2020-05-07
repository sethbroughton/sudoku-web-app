package com.techelevator;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

@Component
public class JdbcPuzzle implements PuzzleDao {

	private JdbcTemplate jdbcTemplate;

	@Autowired
	public JdbcPuzzle(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	@Override
	public Puzzle getRandomPuzzle() {
		Puzzle myPuzzle = new Puzzle();
//		int[][] values = new int[][] {
//				{0,0,0,0,0,0,0,0,0},
//				{0,3,0,0,0,0,1,6,0},
//				{0,6,7,0,3,5,0,0,4},
//				{6,0,8,1,2,0,9,0,0},
//				{0,9,0,0,8,0,0,3,0},
//				{0,0,2,0,7,9,8,0,6},
//				{8,0,0,6,9,0,3,5,0},
//				{0,2,6,0,0,0,0,9,0},
//				{0,0,0,0,0,0,0,0,0},
//		};
		int[][] values = new int[9][9];

		String SqlSelectRandomPuzzle = "SELECT * FROM puzzle ORDER BY RANDOM() LIMIT 1;";

		SqlRowSet results = jdbcTemplate.queryForRowSet(SqlSelectRandomPuzzle);
		while (results.next()) {
			String puzzleString = results.getString("puzzle");
			String[] array = puzzleString.split("");
			
			for (int i = 0; i < array.length; i++) {
				int digit = Integer.parseInt(array[i]);
				int column = i % 9;
				int row = i / 9;
				values[row][column] = digit;
			}
		}
		myPuzzle.setValues(values);
		return myPuzzle;
	}

}
