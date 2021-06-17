// puzzles.js contains functions that define the puzzles

// to add a puzzle, copy/paste the generatePuzzle1() function and add/modify the nodes, connections, and game parameters
// then add the function name to the puzzle list in index.html's <script> section

// blank puzzle
function emptyPuzzle() {
    networks.nodes = [];
    networks.index();
}

// generates the puzzle (simple horizontal line)
function generatePuzzle1() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.11, .5];
    var node_2_loc = [.24, .5];
    var node_3_loc = [.37, .5];
    var node_4_loc = [.5, .5];
    var node_5_loc = [.63, .5];
    var node_6_loc = [.76, .5];
    var node_7_loc = [.89, .5];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_5.connect(node_6);
    node_6.connect(node_7);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7];  // set this to include all the nodes

    // fifth set the game parameters
    networks.observationNodes = [0, 2, 5];  // set this to the indexed nodes used in the observation stage
    networks.optimalHops = 4;  // set this to the optimal number of hops (you'll need to figure that out yourself)
    networks.maxRounds = 3;  // set this to the maximum number of guesses the user can make
}

// generates the puzzle (simple arc)
function generatePuzzle2() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.2, .5];
    var node_2_loc = [.2402, .65];
    var node_3_loc = [.35, .7598];
    var node_4_loc = [.5, .8];
    var node_5_loc = [.65, .7598];
    var node_6_loc = [.7598, .65];
    var node_7_loc = [.8, .5];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_5.connect(node_6);
    node_6.connect(node_7);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7];

    // fifth set the game parameters
    networks.observationNodes = [0, 1, 2];
    networks.optimalHops = 4;
    networks.maxRounds = 3;
}

// generates the puzzle (complex sideways arc)
function generatePuzzle3() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.1, .77];
    var node_2_loc = [.11, .9];
    var node_3_loc = [.3, .9];
    var node_4_loc = [.32, .80];
    var node_5_loc = [.52, .85];
    var node_6_loc = [.65, .81];
    var node_7_loc = [.8, .89];
    var node_8_loc = [.91, .86];
    var node_9_loc = [.7, .70];
    var node_10_loc = [.88, .68];
    var node_11_loc = [.85, .5];
    var node_12_loc = [.82, .4];
    var node_13_loc = [.87, .30];
    var node_14_loc = [.80, .18];
    var node_15_loc = [.68, .25];
    var node_16_loc = [.6, .14];
    var node_17_loc = [.51, .21];
    var node_18_loc = [.4, .39];
    var node_19_loc = [.42, .27];
    var node_20_loc = [.41, .12];
    var node_21_loc = [.3, .2];
    var node_22_loc = [.21, .12];
    var node_23_loc = [.17, .22];
    var node_24_loc = [.16, .33];
    var node_25_loc = [.16, .42];
    var node_26_loc = [.12, .55];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    var node_9 = new Node(gameboard.context, node_9_loc);
    var node_10 = new Node(gameboard.context, node_10_loc);
    var node_11 = new Node(gameboard.context, node_11_loc);
    var node_12 = new Node(gameboard.context, node_12_loc);
    var node_13 = new Node(gameboard.context, node_13_loc);
    var node_14 = new Node(gameboard.context, node_14_loc);
    var node_15 = new Node(gameboard.context, node_15_loc);
    var node_16 = new Node(gameboard.context, node_16_loc);
    var node_17 = new Node(gameboard.context, node_17_loc);
    var node_18 = new Node(gameboard.context, node_18_loc);
    var node_19 = new Node(gameboard.context, node_19_loc);
    var node_20 = new Node(gameboard.context, node_20_loc);
    var node_21 = new Node(gameboard.context, node_21_loc);
    var node_22 = new Node(gameboard.context, node_22_loc);
    var node_23 = new Node(gameboard.context, node_23_loc);
    var node_24 = new Node(gameboard.context, node_24_loc);
    var node_25 = new Node(gameboard.context, node_25_loc);
    var node_26 = new Node(gameboard.context, node_26_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_5.connect(node_6);
    node_6.connect(node_7);
    node_6.connect(node_9);
    node_7.connect(node_8);
    node_9.connect(node_10);
    node_8.connect(node_10);
    node_10.connect(node_11);
    node_11.connect(node_12);
    node_11.connect(node_13);
    node_12.connect(node_13);
    node_13.connect(node_14);
    node_14.connect(node_15);
    node_14.connect(node_16);
    node_15.connect(node_16);
    node_15.connect(node_17);
    node_16.connect(node_17);
    node_16.connect(node_20);
    node_17.connect(node_18);
    node_17.connect(node_19);
    node_17.connect(node_20);
    node_18.connect(node_21);
    node_19.connect(node_21);
    node_20.connect(node_21);
    node_21.connect(node_22);
    node_21.connect(node_23);
    node_21.connect(node_24);
    node_22.connect(node_23);
    node_23.connect(node_24);
    node_24.connect(node_25);
    node_25.connect(node_26);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9, node_10, node_11, node_12, node_13, node_14, node_15, node_16, node_17, node_18, node_19, node_20, node_21, node_22, node_23, node_24, node_25, node_26];

    // fifth set the game parameters
    networks.observationNodes = [5, 15, 22];
    networks.optimalHops = 9;
    networks.maxRounds = 3;
}


// generates the puzzle (tri star)
function generatePuzzle4() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.07, .92];
    var node_2_loc = [.16, .91];
    var node_3_loc = [.25, .94];
    var node_4_loc = [.34, .92];
    var node_5_loc = [.09, .81];
    var node_6_loc = [.18, .81];
    var node_7_loc = [.27, .81];
    var node_8_loc = [.38, .65];
    var node_9_loc = [.47, .54];
    var node_10_loc = [.52, .43];
    var node_11_loc = [.47, .32];
    var node_12_loc = [.38, .21];
    var node_13_loc = [.27, .18];
    var node_14_loc = [.18, .18];
    var node_15_loc = [.09, .18];
    var node_16_loc = [.09, .10];
    var node_17_loc = [.18, .09];
    var node_18_loc = [.27, .09];
    var node_19_loc = [.36, .11];
    var node_20_loc = [.54, .18];
    var node_21_loc = [.62, .21];
    var node_22_loc = [.70, .24];
    var node_23_loc = [.80, .23];
    var node_24_loc = [.88, .24];
    var node_25_loc = [.96, .21];
    var node_26_loc = [.94, .12];
    var node_27_loc = [.86, .12];
    var node_28_loc = [.78, .14];
    

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    var node_9 = new Node(gameboard.context, node_9_loc);
    var node_10 = new Node(gameboard.context, node_10_loc);
    var node_11 = new Node(gameboard.context, node_11_loc);
    var node_12 = new Node(gameboard.context, node_12_loc);
    var node_13 = new Node(gameboard.context, node_13_loc);
    var node_14 = new Node(gameboard.context, node_14_loc);
    var node_15 = new Node(gameboard.context, node_15_loc);
    var node_16 = new Node(gameboard.context, node_16_loc);
    var node_17 = new Node(gameboard.context, node_17_loc);
    var node_18 = new Node(gameboard.context, node_18_loc);
    var node_19 = new Node(gameboard.context, node_19_loc);
    var node_20 = new Node(gameboard.context, node_20_loc);
    var node_21 = new Node(gameboard.context, node_21_loc);
    var node_22 = new Node(gameboard.context, node_22_loc);
    var node_23 = new Node(gameboard.context, node_23_loc);
    var node_24 = new Node(gameboard.context, node_24_loc);
    var node_25 = new Node(gameboard.context, node_25_loc);
    var node_26 = new Node(gameboard.context, node_26_loc);
    var node_27 = new Node(gameboard.context, node_27_loc);
    var node_28 = new Node(gameboard.context, node_28_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_1.connect(node_5);
    node_2.connect(node_7);
    node_2.connect(node_3);
    node_2.connect(node_4);
    node_2.connect(node_5);
    node_2.connect(node_6);
    node_3.connect(node_7);
    node_3.connect(node_4);
    node_3.connect(node_5);
    node_3.connect(node_6);
    node_4.connect(node_7);
    node_4.connect(node_5);
    node_5.connect(node_7);
    node_6.connect(node_7);
    node_6.connect(node_5);
    node_6.connect(node_2);
    node_6.connect(node_3);
    node_6.connect(node_4);
    node_7.connect(node_8);
    node_8.connect(node_9);
    node_9.connect(node_10);
    node_10.connect(node_11);
    node_11.connect(node_12);
    node_11.connect(node_20);
    node_11.connect(node_21);
    node_12.connect(node_13);
    node_12.connect(node_14);
    node_12.connect(node_18);
    node_12.connect(node_19);
    node_13.connect(node_14);
    node_13.connect(node_18);
    node_13.connect(node_19);
    node_14.connect(node_15);
    node_14.connect(node_16);
    node_14.connect(node_17);
    node_14.connect(node_18);
    node_14.connect(node_19);
    node_15.connect(node_16);
    node_15.connect(node_17);
    node_16.connect(node_17);
    node_20.connect(node_21);
    node_21.connect(node_22);
    node_21.connect(node_23);
    node_21.connect(node_28);
    node_22.connect(node_23);
    node_23.connect(node_24);
    node_23.connect(node_25);
    node_23.connect(node_28);
    node_23.connect(node_27);
    node_24.connect(node_25);
    node_24.connect(node_26);
    node_24.connect(node_27);
    node_25.connect(node_26);
    node_28.connect(node_27);
    node_28.connect(node_26);
    node_28.connect(node_25);
    node_27.connect(node_26);
    node_27.connect(node_25);
    node_27.connect(node_24);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9, node_10, node_11, node_12, node_13, node_14, node_15, node_16, node_17, node_18, node_19, node_20, node_21, node_22, node_23, node_24, node_25, node_26, node_27, node_28];

    // fifth set the game parameters
    networks.observationNodes = [5, 15, 22];
    networks.optimalHops = 6;
    networks.maxRounds = 3;
}

// generates the puzzle (gold standard cross)
function generatePuzzle5() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.2, .5];
    var node_2_loc = [.35, .5];
    var node_3_loc = [.5, .5];
    var node_4_loc = [.65, .5];
    var node_5_loc = [.8, .5];
    var node_6_loc = [.5, .8];
    var node_7_loc = [.5, .65];
    var node_8_loc = [.5, .35];
    var node_9_loc = [.5, .2];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    var node_9 = new Node(gameboard.context, node_9_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_6.connect(node_7);
    node_7.connect(node_3);
    node_3.connect(node_8);
    node_8.connect(node_9);
    node_2.connect(node_7);
    node_2.connect(node_8);
    node_4.connect(node_7);
    node_4.connect(node_8);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9];

    // fifth set the game parameters
    networks.observationNodes = [0, 2, 5];
    networks.optimalHops = 3;
    networks.maxRounds = 3;
}

// generates the puzzle (complicated triangles/squares)
function generatePuzzle6() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.1, .77];
    var node_2_loc = [.11, .9];
    var node_3_loc = [.3, .9];
    var node_4_loc = [.32, .80];
    var node_5_loc = [.52, .85];
    var node_6_loc = [.65, .81];
    var node_7_loc = [.8, .89];
    var node_8_loc = [.91, .86];
    var node_9_loc = [.7, .70];
    var node_10_loc = [.88, .68];
    var node_11_loc = [.85, .5];
    var node_12_loc = [.82, .4];
    var node_13_loc = [.87, .30];
    var node_14_loc = [.80, .18];
    var node_15_loc = [.68, .25];
    var node_16_loc = [.6, .14];
    var node_17_loc = [.51, .21];
    var node_18_loc = [.4, .39];
    var node_19_loc = [.42, .27];
    var node_20_loc = [.41, .12];
    var node_21_loc = [.3, .2];
    var node_22_loc = [.21, .12];
    var node_23_loc = [.17, .22];
    var node_24_loc = [.16, .33];
    var node_25_loc = [.16, .42];
    var node_26_loc = [.12, .55];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    node_2.triangle = true;
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    node_8.triangle = true;
    var node_9 = new Node(gameboard.context, node_9_loc);
    var node_10 = new Node(gameboard.context, node_10_loc);
    node_10.triangle = true;
    var node_11 = new Node(gameboard.context, node_11_loc);
    var node_12 = new Node(gameboard.context, node_12_loc);
    var node_13 = new Node(gameboard.context, node_13_loc);
    var node_14 = new Node(gameboard.context, node_14_loc);
    var node_15 = new Node(gameboard.context, node_15_loc);
    node_15.triangle = true;
    var node_16 = new Node(gameboard.context, node_16_loc);
    var node_17 = new Node(gameboard.context, node_17_loc);
    var node_18 = new Node(gameboard.context, node_18_loc);
    var node_19 = new Node(gameboard.context, node_19_loc);
    node_19.triangle = true;
    var node_20 = new Node(gameboard.context, node_20_loc);
    var node_21 = new Node(gameboard.context, node_21_loc);
    node_21.triangle = true;
    var node_22 = new Node(gameboard.context, node_22_loc);
    var node_23 = new Node(gameboard.context, node_23_loc);
    var node_24 = new Node(gameboard.context, node_24_loc);
    var node_25 = new Node(gameboard.context, node_25_loc);
    var node_26 = new Node(gameboard.context, node_26_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_5.connect(node_6);
    node_6.connect(node_7);
    node_6.connect(node_9);
    node_7.connect(node_8);
    node_9.connect(node_10);
    node_8.connect(node_10);
    node_10.connect(node_11);
    node_11.connect(node_12);
    node_11.connect(node_13);
    node_12.connect(node_13);
    node_13.connect(node_14);
    node_14.connect(node_15);
    node_14.connect(node_16);
    node_15.connect(node_16);
    node_15.connect(node_17);
    node_16.connect(node_17);
    node_16.connect(node_20);
    node_17.connect(node_18);
    node_17.connect(node_19);
    node_17.connect(node_20);
    node_18.connect(node_21);
    node_19.connect(node_21);
    node_20.connect(node_21);
    node_21.connect(node_22);
    node_21.connect(node_23);
    node_21.connect(node_24);
    node_22.connect(node_23);
    node_23.connect(node_24);
    node_24.connect(node_25);
    node_25.connect(node_26);

    // the triangle connections
    node_21.connect(node_2);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9, node_10, node_11, node_12, node_13, node_14, node_15, node_16, node_17, node_18, node_19, node_20, node_21, node_22, node_23, node_24, node_25, node_26];

    // fifth set the game parameters
    networks.observationNodes = [5, 10, 22];
    networks.optimalHops = 7;
    networks.maxRounds = 3;
}

// generates the puzzle (large cross)
function generatePuzzle7() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.05, .5];
    var node_2_loc = [.2, .5];
    var node_3_loc = [.35, .5];
    var node_4_loc = [.5, .5];
    var node_5_loc = [.65, .5];
    var node_6_loc = [.8, .5];
    var node_7_loc = [.95, .5];
    var node_8_loc = [.5, .95];
    var node_9_loc = [.5, .8];
    var node_10_loc = [.5, .65];
    var node_11_loc = [.5, .35];
    var node_12_loc = [.5, .2];
    var node_13_loc = [.5, .05];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    var node_9 = new Node(gameboard.context, node_9_loc);
    var node_10 = new Node(gameboard.context, node_10_loc);
    var node_11 = new Node(gameboard.context, node_11_loc);
    var node_12 = new Node(gameboard.context, node_12_loc);
    var node_13 = new Node(gameboard.context, node_13_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_5.connect(node_6);
    node_6.connect(node_7);
    node_7.connect(node_8);
    node_8.connect(node_9);
    node_9.connect(node_10);
    node_10.connect(node_11);
    node_11.connect(node_12);
    node_12.connect(node_13);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9, node_10, node_11, node_12, node_13];

    // fifth set the game parameters
    networks.observationNodes = [2, 4, 8];
    networks.optimalHops = 7;
    networks.maxRounds = 3;
}

// generates the puzzle (wavy cross)
function generatePuzzle8() {
    // first record the location of each node, as an x% y% of the canvas
    var node_1_loc = [.07, .5];
    var node_2_loc = [.21, .68];
    var node_3_loc = [.35, .78];
    var node_4_loc = [.5, .5];
    var node_5_loc = [.64, .36];
    var node_6_loc = [.78, .5];
    var node_7_loc = [.93, .14];
    var node_8_loc = [.57, .93];
    var node_9_loc = [.60, .78];
    var node_10_loc = [.5, .68];
    var node_11_loc = [.36, .36];
    var node_12_loc = [.74, .21];
    var node_13_loc = [.44, .07];

    // second create the node objects
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    var node_9 = new Node(gameboard.context, node_9_loc);
    var node_10 = new Node(gameboard.context, node_10_loc);
    var node_11 = new Node(gameboard.context, node_11_loc);
    var node_12 = new Node(gameboard.context, node_12_loc);
    var node_13 = new Node(gameboard.context, node_13_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_1.connect(node_2);
    node_2.connect(node_3);
    node_3.connect(node_4);
    node_4.connect(node_5);
    node_5.connect(node_6);
    node_6.connect(node_7)
    node_7.connect(node_8);
    node_8.connect(node_9);
    node_9.connect(node_10);
    node_10.connect(node_11);
    node_11.connect(node_12);
    node_12.connect(node_13);

    // fourth add the nodes to the network
    networks.nodes = [node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9, node_10, node_11, node_12, node_13];

    // fifth set the game parameters
    networks.observationNodes = [2, 4, 8];
    networks.optimalHops = 7;
    networks.maxRounds = 3;
}

// [autogenerated] Kilshin network - Large
function generatePuzzleKilshinLarge() {
    // first record the location of each node, as an x% y% of the canvas
    var node_0_loc = [0.08174302203951923, 0.22405438265601202];
    var node_1_loc = [0.1407761470106606, 0.33817958773081036];
    var node_2_loc = [0.11066380833279767, 0.43869642595403047];
    var node_3_loc = [0.12717505730670958, 0.6355043696255741];
    var node_4_loc = [0.1210346723592086, 0.6499987764568462];
    var node_5_loc = [0.2194485474905332, 0.18154750593247188];
    var node_6_loc = [0.19157682720904767, 0.35946951933335947];
    var node_7_loc = [0.2287936623495556, 0.4697775599672729];
    var node_8_loc = [0.2227402965398237, 0.5371817685235724];
    var node_9_loc = [0.2301064201295059, 0.6936162891652303];
    var node_10_loc = [0.16820233132474485, 0.8166467729662554];
    var node_11_loc = [0.3286237837200243, 0.048565025733208554];
    var node_12_loc = [0.29710405043344995, 0.19363931182640823];
    var node_13_loc = [0.34651605454557044, 0.2816655362618457];
    var node_14_loc = [0.32672670971114226, 0.4137511239281813];
    var node_15_loc = [0.3425030315205629, 0.5486227587345184];
    var node_16_loc = [0.2940922674480761, 0.70379126497716];
    var node_17_loc = [0.3221365372991015, 0.7631879522159682];
    var node_18_loc = [0.3006986744937748, 0.8632057430749288];
    var node_19_loc = [0.4205241882912332, 0.07913005815077967];
    var node_20_loc = [0.4201047890230006, 0.2394190681940891];
    var node_21_loc = [0.4805334596275788, 0.28224429001302603];
    var node_22_loc = [0.4589365816730082, 0.4596098571343142];
    var node_23_loc = [0.41209293489366033, 0.5547834994995164];
    var node_24_loc = [0.4817924624609061, 0.7004732607688001];
    var node_25_loc = [0.45672036197400584, 0.7967671598432845];
    var node_26_loc = [0.42926562741214797, 0.9449325737632824];
    var node_27_loc = [0.6381501462422249, 0.07894832377119916];
    var node_28_loc = [0.5377627479374183, 0.2811750737620399];
    var node_29_loc = [0.5448335711696936, 0.3069382032851761];
    var node_30_loc = [0.5550101571014386, 0.4597859275342167];
    var node_31_loc = [0.5849292086485386, 0.5496178327589742];
    var node_32_loc = [0.5532489412142662, 0.6581185054223759];
    var node_33_loc = [0.5393684856630672, 0.806987424630831];
    var node_34_loc = [0.5761073077676284, 0.8593635101240837];
    var node_35_loc = [0.6258823459985511, 0.11353339859003611];
    var node_36_loc = [0.6663479140008597, 0.14057725078201858];
    var node_37_loc = [0.6314695145893822, 0.34085166731658817];
    var node_38_loc = [0.6772151838481543, 0.4110466764020542];
    var node_39_loc = [0.687960423769193, 0.5681186272943014];
    var node_40_loc = [0.6528619844885706, 0.6935142987766926];
    var node_41_loc = [0.705326944286734, 0.8035402612073751];
    var node_42_loc = [0.6560817074472451, 0.9042033366511328];
    var node_43_loc = [0.8071268860301412, 0.10178488599822458];
    var node_44_loc = [0.7740520672390745, 0.1832039415364769];
    var node_45_loc = [0.7714270553740321, 0.3161258175011904];
    var node_46_loc = [0.8582596115248684, 0.43042900916832916];
    var node_47_loc = [0.8194935725212718, 0.6281790330033556];
    var node_48_loc = [0.79063468118235, 0.6691417043273702];
    var node_49_loc = [0.7659645361894227, 0.7950436727354343];
    var node_50_loc = [0.7883175549719234, 0.8581943473367631];
    var node_51_loc = [0.8583505415351252, 0.22081891891501443];
    var node_52_loc = [0.8945371104551799, 0.3224927951008959];
    var node_53_loc = [0.8841590663108533, 0.4377089176974083];
    var node_54_loc = [0.9556241039088859, 0.5441981914697513];
    var node_55_loc = [0.8981447379945758, 0.6486662657508179];

    // second create the node objects
    var node_0 = new Node(gameboard.context, node_0_loc);
    var node_1 = new Node(gameboard.context, node_1_loc);
    var node_2 = new Node(gameboard.context, node_2_loc);
    var node_3 = new Node(gameboard.context, node_3_loc);
    var node_4 = new Node(gameboard.context, node_4_loc);
    var node_5 = new Node(gameboard.context, node_5_loc);
    var node_6 = new Node(gameboard.context, node_6_loc);
    var node_7 = new Node(gameboard.context, node_7_loc);
    var node_8 = new Node(gameboard.context, node_8_loc);
    var node_9 = new Node(gameboard.context, node_9_loc);
    var node_10 = new Node(gameboard.context, node_10_loc);
    var node_11 = new Node(gameboard.context, node_11_loc);
    var node_12 = new Node(gameboard.context, node_12_loc);
    var node_13 = new Node(gameboard.context, node_13_loc);
    var node_14 = new Node(gameboard.context, node_14_loc);
    var node_15 = new Node(gameboard.context, node_15_loc);
    var node_16 = new Node(gameboard.context, node_16_loc);
    var node_17 = new Node(gameboard.context, node_17_loc);
    var node_18 = new Node(gameboard.context, node_18_loc);
    var node_19 = new Node(gameboard.context, node_19_loc);
    var node_20 = new Node(gameboard.context, node_20_loc);
    var node_21 = new Node(gameboard.context, node_21_loc);
    var node_22 = new Node(gameboard.context, node_22_loc);
    var node_23 = new Node(gameboard.context, node_23_loc);
    var node_24 = new Node(gameboard.context, node_24_loc);
    var node_25 = new Node(gameboard.context, node_25_loc);
    var node_26 = new Node(gameboard.context, node_26_loc);
    var node_27 = new Node(gameboard.context, node_27_loc);
    var node_28 = new Node(gameboard.context, node_28_loc);
    var node_29 = new Node(gameboard.context, node_29_loc);
    var node_30 = new Node(gameboard.context, node_30_loc);
    var node_31 = new Node(gameboard.context, node_31_loc);
    var node_32 = new Node(gameboard.context, node_32_loc);
    var node_33 = new Node(gameboard.context, node_33_loc);
    var node_34 = new Node(gameboard.context, node_34_loc);
    var node_35 = new Node(gameboard.context, node_35_loc);
    var node_36 = new Node(gameboard.context, node_36_loc);
    var node_37 = new Node(gameboard.context, node_37_loc);
    var node_38 = new Node(gameboard.context, node_38_loc);
    var node_39 = new Node(gameboard.context, node_39_loc);
    var node_40 = new Node(gameboard.context, node_40_loc);
    var node_41 = new Node(gameboard.context, node_41_loc);
    var node_42 = new Node(gameboard.context, node_42_loc);
    var node_43 = new Node(gameboard.context, node_43_loc);
    var node_44 = new Node(gameboard.context, node_44_loc);
    var node_45 = new Node(gameboard.context, node_45_loc);
    var node_46 = new Node(gameboard.context, node_46_loc);
    var node_47 = new Node(gameboard.context, node_47_loc);
    var node_48 = new Node(gameboard.context, node_48_loc);
    var node_49 = new Node(gameboard.context, node_49_loc);
    var node_50 = new Node(gameboard.context, node_50_loc);
    var node_51 = new Node(gameboard.context, node_51_loc);
    var node_52 = new Node(gameboard.context, node_52_loc);
    var node_53 = new Node(gameboard.context, node_53_loc);
    var node_54 = new Node(gameboard.context, node_54_loc);
    var node_55 = new Node(gameboard.context, node_55_loc);

    // third connect the nodes, running a connection from A->B will also create the connection from B->A
    node_0.connect(node_1);
    node_0.connect(node_5);
    node_1.connect(node_2);
    node_1.connect(node_6);
    node_1.connect(node_7);
    node_2.connect(node_7);
    node_3.connect(node_4);
    node_3.connect(node_8);
    node_3.connect(node_9);
    node_4.connect(node_8);
    node_4.connect(node_9);
    node_5.connect(node_6);
    node_5.connect(node_12);
    node_6.connect(node_7);
    node_6.connect(node_13);
    node_7.connect(node_14);
    node_8.connect(node_9);
    node_8.connect(node_15);
    node_8.connect(node_16);
    node_9.connect(node_10);
    node_9.connect(node_16);
    node_10.connect(node_17);
    node_11.connect(node_12);
    node_11.connect(node_19);
    node_12.connect(node_13);
    node_13.connect(node_14);
    node_14.connect(node_22);
    node_15.connect(node_16);
    node_15.connect(node_23);
    node_16.connect(node_17);
    node_17.connect(node_18);
    node_18.connect(node_26);
    node_19.connect(node_20);
    node_20.connect(node_21);
    node_20.connect(node_28);
    node_21.connect(node_22);
    node_21.connect(node_28);
    node_21.connect(node_29);
    node_22.connect(node_30);
    node_23.connect(node_24);
    node_23.connect(node_31);
    node_23.connect(node_32);
    node_24.connect(node_25);
    node_24.connect(node_32);
    node_24.connect(node_33);
    node_25.connect(node_26);
    node_25.connect(node_33);
    node_27.connect(node_28);
    node_27.connect(node_35);
    node_27.connect(node_36);
    node_28.connect(node_29);
    node_28.connect(node_36);
    node_29.connect(node_30);
    node_29.connect(node_37);
    node_29.connect(node_38);
    node_30.connect(node_31);
    node_30.connect(node_38);
    node_31.connect(node_32);
    node_31.connect(node_38);
    node_31.connect(node_39);
    node_32.connect(node_33);
    node_32.connect(node_39);
    node_32.connect(node_40);
    node_33.connect(node_34);
    node_33.connect(node_41);
    node_34.connect(node_42);
    node_35.connect(node_36);
    node_35.connect(node_43);
    node_36.connect(node_43);
    node_36.connect(node_44);
    node_37.connect(node_38);
    node_37.connect(node_45);
    node_38.connect(node_39);
    node_39.connect(node_47);
    node_40.connect(node_41);
    node_40.connect(node_48);
    node_41.connect(node_42);
    node_42.connect(node_50);
    node_43.connect(node_44);
    node_44.connect(node_45);
    node_44.connect(node_51);
    node_45.connect(node_46);
    node_45.connect(node_52);
    node_46.connect(node_53);
    node_47.connect(node_48);
    node_47.connect(node_55);
    node_48.connect(node_55);
    node_49.connect(node_50);
    node_49.connect(node_56);
    node_52.connect(node_53);
    node_53.connect(node_54);
    node_54.connect(node_55);
    node_55.connect(node_56);

    // fourth add the nodes to the network
    networks.nodes = [node_0, node_1, node_2, node_3, node_4, node_5, node_6, node_7, node_8, node_9, node_10, node_11, node_12, node_13, node_14, node_15, node_16, node_17, node_18, node_19, node_20, node_21, node_22, node_23, node_24, node_25, node_26, node_27, node_28, node_29, node_30, node_31, node_32, node_33, node_34, node_35, node_36, node_37, node_38, node_39, node_40, node_41, node_42, node_43, node_44, node_45, node_46, node_47, node_48, node_49, node_50, node_51, node_52, node_53, node_54, node_55];

    //  fifth set the game parameters
    networks.observation_nodes = [5, 15, 25];
    networks.optimalHops = 3;
    networks.maxRounds = 3;
}