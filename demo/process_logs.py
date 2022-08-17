# process_logs.py: converts the log files into a CSV of results

import os

path = "./logs/"

csv_lines = []

for p in os.listdir(path):
    p = p[:-4]
    with open(path + "/" + p + ".txt", "r") as f:
        print("Processing user:", p)
        actions = f.readlines()

        selections = {}
        selection_times = {}
        scores = {}
        start_times = {}
        currentPuzzle = ""
        
        selection_round = 0 
        record = False

        # process the actions
        for a in range(len(actions)):
            action = actions[a]
            #print("---- ", a, action)

            if not record:
                if "next button introduction" in action:
                    selections = {}
                    selection_times = {}
                    scores = {}
                    start_times = {}
                    currentPuzzle = ""

                    continue
            
            # if ready to select a node, set current puzzle and start time
            if "ready for node selection" in action:
                #if "round complete" in actions[a-1] or "round complete" in actions[a+1] or "round complete" in actions[a+2]:
                #    continue

                # get the current puzzle
                currentPuzzle = action.split("'")[11]
                #print("added puzzle", "line", a, currentPuzzle)

                # get the selection round
                selection_round = int(action.split("'")[7].split("#")[1])

                # if on selection round #3 or higher, or puzzle already made, ignore (logged at end of round)
                if selection_round >= 3:
                    continue
                
                # if the first round, set the internal lists
                if selection_round == 0:
                    selections[currentPuzzle] = [-1, -1, -1]
                    selection_times[currentPuzzle] = [0, 0, 0]
                    start_times[currentPuzzle] = [0.0, 0.0, 0.0]
                    scores[currentPuzzle] = [0, 0, 0]

                # set the round start time
                start_times[currentPuzzle][selection_round] = float((action.split(",")[0]))
            #print("nodeselection?", "ready for node selection" in action)
            
            # if selected a node, set data
            if "node selected" in action:
                node_index = int(action.split("'")[14].replace(" ", "").replace(":", "").replace(",", ""))
                puzzle = action.split("'")[7]

                #print(">>>", selections[puzzle])
                if selections[puzzle][-1] != -1:
                    continue

                selection_round = selections[puzzle].index(-1)
                #print("puzzle", puzzle, selections.keys(), selection_round)
                selections[puzzle][selection_round] = node_index
                selection_times[puzzle][selection_round] = float(action.split(",")[0])
            
            # if getting a score report, set the data
            if "score from round" in action:
                # get the puzzle
                puzzle = action.split("'")[13]

                # get the selection round
                selection_round = int(action.split("'")[7].split("#")[1])

                # get the score
                score = int(action.split("'")[10].replace(" ", "").replace(":", "").replace(",", ""))

                # set the score
                scores[puzzle][selection_round] = score

        # create CSV entry
        round_info = {}

        # worker, puzzle1 round 1 node, puzzle1 round 1 score, puzzle1 round 1 time to select, ...
        
        # create the string for each user
        # for each puzzle in alphabetical order..
        puzzles = sorted(list(selections.keys()))
        puzzle_entries = []
        for puzzle in puzzles:
            # for each round in 0-2
            round_entries = []
            for selection_round in range(3):
                # get the node selected
                selected_node = selections[puzzle][selection_round]

                # get the round score
                score = scores[puzzle][selection_round]

                # get the time to select
                if selected_node == -1:
                    selection_time = 0
                elif selection_times[puzzle][selection_round] != 0:
                    selection_time = round(selection_times[puzzle][selection_round] - start_times[puzzle][selection_round], 2)
                    if selection_time < 0:
                        print("!!", puzzle, selection_round, selection_times[puzzle][selection_round], start_times[puzzle][selection_round])

                #print("---", puzzle, start_times)
                # add the entry to the list
                round_entry = ",".join([str(selected_node), str(score), str(selection_time)])
                round_entries.append(round_entry)
            puzzle_entry = ",".join(round_entries)
            puzzle_entries.append(puzzle_entry)
        
        game_entry = ",".join(puzzle_entries)
    
        # get the round data
        csv_entry = p + "," + game_entry
        csv_lines.append(csv_entry)

    
# write the worker entries to a CSV file
with open("ni_test_output.csv", "w") as f:
    # create the header
    header = ["worker id"]
    for puzzle in sorted(list(selections.keys())):
        puzzle = puzzle.replace("generate", "")
        for selection_round in range(3):
            prefix = puzzle + " round " + str(selection_round) + " "
            header.append(prefix + "node")
            header.append(prefix + "score")
            header.append(prefix + "time to select")

    # write the header
    f.write(",".join(header))

    # write each worker data string
    for line in csv_lines:
        num_attributes = 163
        if len(line.split(",")) == num_attributes:
            f.write("\n" + line)

print("Complete!")

                
