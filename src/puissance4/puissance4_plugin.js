$.fn.plugin = function(){

	class Puissance_4{

		constructor(nb_victory_pl1,nb_victory_pl2){
			//names
			var pl1_name = prompt("Joueur 1, choisis ton pseudo");
			while(pl1_name==false){
				pl1_name = prompt("Joueur 1, choisis un pseudo valide !");
			}
			var pl2_name = prompt("Joueur 2 à ton tour, choisis ton pseudo");
			while(pl2_name==false || pl2_name==pl1_name){
				if(pl2_name==false){
					pl2_name = prompt("Joueur 2, choisis un pseudo valide !");
				} else {
					pl2_name = prompt("Joueur 2, tu ne peux pas avoir le même pseudo !");
				}
			}
			//marker_victory
			nb_victory_pl1=0;
			nb_victory_pl2=0;
			//fonctions
			this.choices(pl1_name,pl2_name);
			this.initialisation();
			this.play(nb_victory_pl1,nb_victory_pl2,pl1_name,pl2_name);
		}

		choices(pl1_name,pl2_name){

			//TOOLBAR
			let toolbar_choices = document.createElement('div');
			toolbar_choices.style.padding = "1.5rem";
			toolbar_choices.setAttribute('class', 'rows');
			toolbar_choices.setAttribute("id", "toolbar_choice_id");
			toolbar_choices.textContent = "Choisissez ici vos options :";
			document.body.appendChild(toolbar_choices);

			//PLAYER 1
			//div
			let player1_choice_div = document.createElement('div');
			player1_choice_div.style.paddingLeft = "1.5rem";
			player1_choice_div.setAttribute('class', 'rows');
			player1_choice_div.setAttribute("id", "player1_choice_div");
			player1_choice_div.textContent = pl1_name+" :";
			document.body.appendChild(player1_choice_div);
			//select
			let player1_choice_select = document.createElement("select");
			player1_choice_select.setAttribute("id", "player1_choice");
			player1_choice_select.style.fontSize = "13px";
			player1_choice_select.style.margin = "0.5rem";
			let opt0 = document.createElement("option");
			opt0.value = "0";
			opt0.text = "Choix d'équipe (domicile)...";
			let opt1 = document.createElement("option");
			opt1.value = "rgb(255, 255, 0)";
			opt1.text = "Nantes";
			let opt2 = document.createElement("option");
			opt2.value = "rgb(0, 204, 255)";
			opt2.text = "Marseille";
			let opt3 = document.createElement("option");
			opt3.value = "rgb(255, 0, 0)";
			opt3.text = "Lille";
			let opt4 = document.createElement("option");
			opt4.value = "rgb(0, 0, 102)";
			opt4.text = "Paris";
			player1_choice_select.add(opt0, null);
			player1_choice_select.add(opt1, null);
			player1_choice_select.add(opt2, null);
			player1_choice_select.add(opt3, null);
			player1_choice_select.add(opt4, null);
			$( "#player1_choice_div" ).append(player1_choice_select);

			//PLAYER 2
			//div
			let player2_choice_div = document.createElement('div');
			player2_choice_div.style.paddingLeft = "1.5rem";
			player2_choice_div.setAttribute('class', 'rows');
			player2_choice_div.setAttribute("id", "player2_choice_div");
			player2_choice_div.textContent = pl2_name+" :";
			document.body.appendChild(player2_choice_div);
			//select
			let player2_choice_select = document.createElement("select");
			player2_choice_select.setAttribute("id", "player2_choice");
			player2_choice_select.style.fontSize = "13px";
			player2_choice_select.style.margin = "0.5rem";
			let opt5 = document.createElement("option");
			opt5.value = "0";
			opt5.text = "Choix d'équipe (extérieur)...";
			let opt6 = document.createElement("option");
			opt6.value = "rgb(255, 255, 0)";
			opt6.text = "Nantes";
			let opt7 = document.createElement("option");
			opt7.value = "rgb(0, 204, 255)";
			opt7.text = "Marseille";
			let opt8 = document.createElement("option");
			opt8.value = "rgb(255, 0, 0)";
			opt8.text = "Lille";
			let opt9 = document.createElement("option");
			opt9.value = "rgb(0, 0, 102)";
			opt9.text = "Paris";
			player2_choice_select.add(opt5, null);
			player2_choice_select.add(opt6, null);
			player2_choice_select.add(opt7, null);
			player2_choice_select.add(opt8, null);
			player2_choice_select.add(opt9, null);
			$( "#player2_choice_div" ).append(player2_choice_select);

			//MAP
			//div
			let size_map_div = document.createElement('div');
			size_map_div.style.marginTop = "0.5rem";
			size_map_div.style.paddingLeft = "1.5rem";
			size_map_div.setAttribute('class', 'rows');
			size_map_div.setAttribute("id", "size_map_div");
			size_map_div.textContent = "Dimensions souhaitées :";
			document.body.appendChild(size_map_div);
			//lignes
			let size_map_rows = document.createElement("input");
			size_map_rows.style.fontSize = "15px";
			size_map_rows.style.margin = "1%";
			size_map_rows.setAttribute('id', 'size_map_rows');
			size_map_rows.setAttribute('type', 'number');
			size_map_rows.setAttribute('placeholder', 'colonnes (en chiffres)');
			$( "#size_map_div" ).append(size_map_rows);
			//colonnes
			let size_map_cols = document.createElement("input");
			size_map_cols.style.fontSize = "15px";
			size_map_cols.style.margin = "1%";
			size_map_cols.setAttribute('id', 'size_map_cols');
			size_map_cols.setAttribute('type', 'number');
			size_map_cols.setAttribute('placeholder', 'lignes (en chiffres)');
			$( "#size_map_div" ).append(size_map_cols);

		}

		initialisation(){

			//VALIDATE BUTTON
			let button_validate = document.createElement("input");
			button_validate.style.fontSize = "15px";
			button_validate.style.margin = "1rem";
			button_validate.style.marginLeft = "2rem";
			button_validate.setAttribute('id', 'validation_button')
			button_validate.type = "button";
			button_validate.value = "Lancer la partie !";
			document.body.appendChild(button_validate);

		}

		play(nb_victory_pl1,nb_victory_pl2,pl1_name,pl2_name){
			$( "#validation_button" ).click(function() {
				//REFRESH
				if (confirm("Nouvelle partie?") == true) {
					$('#map_div').remove();
					$('#sound_div').remove();
					//VALUES
					let player_turn = 1;
					let e = 0;
					let rows = $( "#size_map_rows" ).val();
					let cols = $( "#size_map_cols" ).val();
					let pl1 = $( "#player1_choice" ).val();
					let pl2 = $( "#player2_choice" ).val();

					//AUDIO_link
					let audio_link;
					switch(pl1){
						case 'rgb(255, 255, 0)':
							audio_link = "src/audio_fcn.mp3";
							break;
						case 'rgb(0, 204, 255)':
							audio_link = "src/audio_om.mp3";
							break;
						case 'rgb(255, 0, 0)':
							audio_link = "src/waka_audio_losc.mp3";
							break;
						case 'rgb(0, 0, 102)':
							audio_link = "src/waving_audio_psg.mp3";
							break;
						default:
							audio_link = "https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg";
					}
					
					//audio
					let sound_div = document.createElement('div');
					sound_div.style.marginTop = "0.5rem";
					sound_div.style.paddingLeft = "";
					sound_div.setAttribute('class', 'rows');
					sound_div.setAttribute("id", "sound_div");
					sound_div.textContent = "Fond sonore :";
					$( "#size_map_div" ).append(sound_div);
					var sound      = document.createElement('audio');
					sound.id       = 'audio_player';
					sound.controls = 'controls';
					sound.autoplay = 'autoplay';
					sound.loop = 'loop';
					sound.src      = audio_link;
					sound.type     = 'audio/mp3';
					$( "#sound_div" ).append(sound);


					//VERIF
					if(pl1==pl2){
						alert("les deux joueurs ne peuvent pas avoir la même équipe !");
						e=1;
					}
					if(pl1==0 || pl2==0){
						alert("les deux joueurs doivent sélectionner une équipe !");
						e=1;
					}
					if(rows<5 || rows>10){
						alert("vous devez déclarer au minimum 5 lignes, et au maximum 10");
						e=1;
					}
					if(cols<5 || cols>10){
						alert("vous devez déclarer au minimum 5 colonnes, et au maximum 10");
						e=1;
					}

					//MAP
					//div
					if(e!=1){
						alert("Partie chargée !");
						let map_div = document.createElement("div");
						map_div.style.fontSize = "15px";
						map_div.style.margin = "1rem";
						map_div.style.marginLeft = "2rem";
						map_div.setAttribute('id', 'map_div');
						document.body.appendChild(map_div);
						//grid
						$('#map_div').append('<div id="map"></div>');
						$('#map').css({
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							border: '1px solid black',
							width: 102*rows,
							backgroundColor: 'blue'
						});
						//cells
						for (let i =0; i < rows*cols; i++){
							$('#map').append('<div class="cell"></div>')
						}
						$('.cell').css({
							width: '100px',
							height: '100px',
							backgroundColor: 'White',
							borderRadius: '50%'
						});
						$('.cell').each(function(index){ 
							$(this).attr('id', index) 
						});
					}

					//GAMEPLAY
					if(player_turn==1){

						$("#map_div").prepend("<p id='p'><b>"+pl1_name+", à toi !</b></p>");

						//logo_affectations
						let logo_pl1
						switch(pl1){
							case 'rgb(255, 255, 0)':
								logo_pl1 = "https://upload.wikimedia.org/wikipedia/fr/2/21/Logo_FC_Nantes_2008.svg";
								break;
							case 'rgb(0, 204, 255)':
								logo_pl1 = "https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg";
								break;
							case 'rgb(255, 0, 0)':
								logo_pl1 = "https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg";
								break;
							case 'rgb(0, 0, 102)':
								logo_pl1 = "https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg";
								break;
						}
						let logo_pl2
						switch(pl2){
							case 'rgb(255, 255, 0)':
								logo_pl2 = "https://upload.wikimedia.org/wikipedia/fr/2/21/Logo_FC_Nantes_2008.svg";
								break;
							case 'rgb(0, 204, 255)':
								logo_pl2 = "https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg";
								break;
							case 'rgb(255, 0, 0)':
								logo_pl2 = "https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg";
								break;
							case 'rgb(0, 0, 102)':
								logo_pl2 = "https://upload.wikimedia.org/wikipedia/fr/8/86/Paris_Saint-Germain_Logo.svg";
								break;
						}

						//logo_exterieur
						var img_exterieur = document.createElement("img");
						img_exterieur.setAttribute('class', 'img');
						img_exterieur.src = logo_pl2;
						var src = document.getElementById("map_div");
						src.prepend(img_exterieur);

						//logo_versus
						var img_versus = document.createElement("img");
						img_versus.setAttribute('class', 'img_versus');
						img_versus.src = "src/logo_vs.png";
						var src = document.getElementById("map_div");
						src.prepend(img_versus);

						//logo_domicile
						var img_domicile = document.createElement("img");
						img_domicile.setAttribute('class', 'img_domicile');
						img_domicile.src = logo_pl1;
						var src = document.getElementById("map_div");
						src.prepend(img_domicile);
						
						$( ".cell" ).click(function(){
							let e;
							//check position
							let id_cell_position = $(this).attr("id");
							if(id_cell_position>=parseFloat(rows)){
								alert("vous devez déposer votre pion tout en haut!");
							} else{
								let id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) ;
								let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
								//control and play
								if(color_cell_last_position!= 'rgb(255, 255, 255)'){
									id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows;
									let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
									if(color_cell_last_position!= 'rgb(255, 255, 255)'){
										id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*2;
										let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
										if(color_cell_last_position!= 'rgb(255, 255, 255)'){
											id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*3;
											let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
											if(color_cell_last_position!= 'rgb(255, 255, 255)'){
												id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*4;
												let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
												if(color_cell_last_position!= 'rgb(255, 255, 255)'){
													id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*5;
													let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
													if(color_cell_last_position!= 'rgb(255, 255, 255)'){
														id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*6;
														let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
														if(color_cell_last_position!= 'rgb(255, 255, 255)'){
															id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*7;
															let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
															if(color_cell_last_position!= 'rgb(255, 255, 255)'){
																id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*8;
																let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
																if(color_cell_last_position!= 'rgb(255, 255, 255)'){
																	id_last_position = parseFloat(id_cell_position) + parseFloat(cols-1) * parseFloat(rows) - rows*9;
																	let color_cell_last_position = $('#'+id_last_position+'').css("background-color");
																	if(color_cell_last_position!= 'rgb(255, 255, 255)'){
																		alert("cette colonne est déjà pleine!")
																		e=1;
																	} 
																} 
															} 
														} 
													} 
												} 
											} 
										} 
									} 
								}
								//put and change 
								if(player_turn==1 && e!=1){
									$('#'+id_last_position+'').css("background-color", pl1);
								} 
								else if(player_turn==2 && e!=1){
									$('#'+id_last_position+'').css("background-color", pl2);
								}


								//LIMITS MAP

								//limit_map_right
								let limit_right_x = 0 + parseFloat(rows)-1;
								let array_limit_right_x = [limit_right_x];
								for(let i=0; i<=cols-2; i++){
									limit_right_x = limit_right_x + parseFloat(rows);
									array_limit_right_x.push(limit_right_x);
								}

								//limits_map_lef
								let limit_left_x = 0;
								let array_limit_left_x = [limit_left_x];
								for(let i=0; i<=cols-2; i++){
									limit_left_x = limit_left_x + parseFloat(rows);
									array_limit_left_x.push(limit_left_x);
								}

								//adaptatif_limits
								let total_cells = parseFloat(rows)*parseFloat(cols)-1;
								let limit_up_left_1;
								let limit_up_left_2;
								let limit_up_left_3;
								let limit_up_right_1;
								let limit_up_right_2;
								let limit_up_right_3;
								let limit_down_left_1;
								let limit_down_left_2;
								let limit_down_left_3;
								let limit_down_right_1;
								let limit_down_right_2;
								let limit_down_right_3;
								
								if(id_last_position<=total_cells){
									if(id_last_position>=array_limit_left_x[0] && id_last_position<=array_limit_right_x[0]){

										limit_up_left_3 = array_limit_left_x[0];
										limit_up_right_3 = array_limit_right_x[0];
										limit_up_left_2 = array_limit_left_x[0];
										limit_up_right_2 = array_limit_right_x[0];
										limit_up_left_1 = array_limit_left_x[0];
										limit_up_right_1 = array_limit_right_x[0];

										limit_left_x = array_limit_left_x[0];
										limit_right_x = (array_limit_right_x[0]);

										limit_down_left_1 = array_limit_left_x[1];
										limit_down_right_1 = array_limit_right_x[1];
										limit_down_left_2 = array_limit_left_x[2];
										limit_down_right_2 = array_limit_right_x[2];
										limit_down_left_3 = array_limit_left_x[3];
										limit_down_right_3 = array_limit_right_x[3];

									}
									else if(id_last_position>=array_limit_left_x[1] && id_last_position<=array_limit_right_x[1]){

										limit_up_left_3 = array_limit_left_x[0];
										limit_up_right_3 = array_limit_right_x[0];
										limit_up_left_2 = array_limit_left_x[0];
										limit_up_right_2 = array_limit_right_x[0];
										limit_up_left_1 = array_limit_left_x[0];
										limit_up_right_1 = array_limit_right_x[0];

										limit_left_x = array_limit_left_x[1];
										limit_right_x = (array_limit_right_x[1]);

										limit_down_left_1 = array_limit_left_x[2];
										limit_down_right_1 = array_limit_right_x[2];
										limit_down_left_2 = array_limit_left_x[3];
										limit_down_right_2 = array_limit_right_x[3];
										limit_down_left_3 = array_limit_left_x[4];
										limit_down_right_3 = array_limit_right_x[4];

									}
									else if(id_last_position>=array_limit_left_x[2] && id_last_position<=array_limit_right_x[2]){

										limit_up_left_3 = array_limit_left_x[0];
										limit_up_right_3 = array_limit_right_x[0];
										limit_up_left_2 = array_limit_left_x[0];
										limit_up_right_2 = array_limit_right_x[0];
										limit_up_left_1 = array_limit_left_x[1];
										limit_up_right_1 = array_limit_right_x[1];

										limit_left_x = array_limit_left_x[2];
										limit_right_x = (array_limit_right_x[2]);

										limit_down_left_1 = array_limit_left_x[3];
										limit_down_right_1 = array_limit_right_x[3];
										limit_down_left_2 = array_limit_left_x[4];
										limit_down_right_2 = array_limit_right_x[4];
										limit_down_left_3 = array_limit_left_x[5];
										limit_down_right_3 = array_limit_right_x[5];

									}
									else if(id_last_position>=array_limit_left_x[3] && id_last_position<=array_limit_right_x[3]){

										limit_up_left_3 = array_limit_left_x[0];
										limit_up_right_3 = array_limit_right_x[0];
										limit_up_left_2 = array_limit_left_x[1];
										limit_up_right_2 = array_limit_right_x[1];
										limit_up_left_1 = array_limit_left_x[2];
										limit_up_right_1 = array_limit_right_x[2];

										limit_left_x = array_limit_left_x[3];
										limit_right_x = (array_limit_right_x[3]);

										limit_down_left_1 = array_limit_left_x[4];
										limit_down_right_1 = array_limit_right_x[4];
										limit_down_left_2 = array_limit_left_x[5];
										limit_down_right_2 = array_limit_right_x[5];
										limit_down_left_3 = array_limit_left_x[6];
										limit_down_right_3 = array_limit_right_x[6];

									}
									else if(id_last_position>=array_limit_left_x[4] && id_last_position<=array_limit_right_x[4]){

										limit_up_left_3 = array_limit_left_x[1];
										limit_up_right_3 = array_limit_right_x[1];
										limit_up_left_2 = array_limit_left_x[2];
										limit_up_right_2 = array_limit_right_x[2];
										limit_up_left_1 = array_limit_left_x[3];
										limit_up_right_1 = array_limit_right_x[3];

										limit_left_x = array_limit_left_x[4];
										limit_right_x = (array_limit_right_x[4]);

										limit_down_left_1 = array_limit_left_x[5];
										limit_down_right_1 = array_limit_right_x[5];
										limit_down_left_2 = array_limit_left_x[6];
										limit_down_right_2 = array_limit_right_x[6];
										limit_down_left_3 = array_limit_left_x[7];
										limit_down_right_3 = array_limit_right_x[7];

									}
									else if(id_last_position>=array_limit_left_x[5] && id_last_position<=array_limit_right_x[5]){

										limit_up_left_3 = array_limit_left_x[2];
										limit_up_right_3 = array_limit_right_x[2];
										limit_up_left_2 = array_limit_left_x[3];
										limit_up_right_2 = array_limit_right_x[3];
										limit_up_left_1 = array_limit_left_x[4];
										limit_up_right_1 = array_limit_right_x[4];

										limit_left_x = array_limit_left_x[5];
										limit_right_x = (array_limit_right_x[5]);

										limit_down_left_1 = array_limit_left_x[6];
										limit_down_right_1 = array_limit_right_x[6];
										limit_down_left_2 = array_limit_left_x[7];
										limit_down_right_2 = array_limit_right_x[7];
										limit_down_left_3 = array_limit_left_x[8];
										limit_down_right_3 = array_limit_right_x[8];

									}
									else if(id_last_position>=array_limit_left_x[6] && id_last_position<=array_limit_right_x[6]){

										limit_up_left_3 = array_limit_left_x[3];
										limit_up_right_3 = array_limit_right_x[3];
										limit_up_left_2 = array_limit_left_x[4];
										limit_up_right_2 = array_limit_right_x[4];
										limit_up_left_1 = array_limit_left_x[5];
										limit_up_right_1 = array_limit_right_x[5];

										limit_left_x = array_limit_left_x[6];
										limit_right_x = (array_limit_right_x[6]);

										limit_down_left_1 = array_limit_left_x[7];
										limit_down_right_1 = array_limit_right_x[7];
										limit_down_left_2 = array_limit_left_x[8];
										limit_down_right_2 = array_limit_right_x[8];
										limit_down_left_3 = array_limit_left_x[9];
										limit_down_right_3 = array_limit_right_x[9];

									}
									else if(id_last_position>=array_limit_left_x[7] && id_last_position<=array_limit_right_x[7]){

										limit_up_left_3 = array_limit_left_x[4];
										limit_up_right_3 = array_limit_right_x[4];
										limit_up_left_2 = array_limit_left_x[5];
										limit_up_right_2 = array_limit_right_x[5];
										limit_up_left_1 = array_limit_left_x[6];
										limit_up_right_1 = array_limit_right_x[6];

										limit_left_x = array_limit_left_x[7];
										limit_right_x = (array_limit_right_x[7]);

										limit_down_left_1 = array_limit_left_x[8];
										limit_down_right_1 = array_limit_right_x[8];
										limit_down_left_2 = array_limit_left_x[9];
										limit_down_right_2 = array_limit_right_x[9];
										limit_down_left_3 = array_limit_left_x[9];
										limit_down_right_3 = array_limit_right_x[9];

									}
									else if(id_last_position>=array_limit_left_x[8] && id_last_position<=array_limit_right_x[8]){

										limit_up_left_3 = array_limit_left_x[5];
										limit_up_right_3 = array_limit_right_x[5];
										limit_up_left_2 = array_limit_left_x[6];
										limit_up_right_2 = array_limit_right_x[6];
										limit_up_left_1 = array_limit_left_x[7];
										limit_up_right_1 = array_limit_right_x[7];

										limit_left_x = array_limit_left_x[8];
										limit_right_x = (array_limit_right_x[8]);

										limit_down_left_1 = array_limit_left_x[9];
										limit_down_right_1 = array_limit_right_x[9];
										limit_down_left_2 = array_limit_left_x[9];
										limit_down_right_2 = array_limit_right_x[9];
										limit_down_left_3 = array_limit_left_x[9];
										limit_down_right_3 = array_limit_right_x[9];
									}

									else if(id_last_position>=array_limit_left_x[9] && id_last_position<=array_limit_right_x[9]){

										limit_up_left_3 = array_limit_left_x[6];
										limit_up_right_3 = array_limit_right_x[6];
										limit_up_left_2 = array_limit_left_x[7];
										limit_up_right_2 = array_limit_right_x[7];
										limit_up_left_1 = array_limit_left_x[8];
										limit_up_right_1 = array_limit_right_x[8];

										limit_left_x = array_limit_left_x[9];
										limit_right_x = (array_limit_right_x[9]);

										limit_down_left_1 = array_limit_left_x[9];
										limit_down_right_1 = array_limit_right_x[9];
										limit_down_left_2 = array_limit_left_x[9];
										limit_down_right_2 = array_limit_right_x[9];
										limit_down_left_3 = array_limit_left_x[9];
										limit_down_right_3 = array_limit_right_x[9];

									}
								}

								//VICTORY CONDITIONS

								//verifs en cas de pépins
								// 		console.log("-------------");
								//		console.log(id_last_position)
								//		console.log(pl1)
								//		console.log(id_diag_up_right_1)
								//		console.log(limit_up_right_1)
								//		console.log(col_diag_up_right_1)
								//		console.log(id_diag_up_right_2)
								//		console.log(limit_up_right_2)
								//		console.log(col_diag_up_right_2)
								//		console.log(id_diag_up_right_3)
								//		console.log(limit_up_right_3)
								//		console.log(col_diag_up_right_3)


								//variable victory
								let victory;

								//Y_victory
								let id_down_1 = parseInt(id_last_position) + parseInt(rows);
								let id_down_2 = parseInt(id_last_position) + parseInt(rows*2);
								let id_down_3 = parseInt(id_last_position) + parseInt(rows*3);
								let col_down_1 = $('#'+id_down_1+'').css("background-color");
								let col_down_2 = $('#'+id_down_2+'').css("background-color");
								let col_down_3 = $('#'+id_down_3+'').css("background-color");
								if(player_turn==1 && col_down_1==pl1 && col_down_2==pl1 && col_down_3==pl1){
									victory="player1";
									alert("3_down!");
								} else if(player_turn==2 && col_down_1==pl2 && col_down_2==pl2 && col_down_3==pl2){
									victory="player2";
									alert("3_down!");
								}

								//X_Victory's
								let id_left_1 = id_last_position-1;
								let id_left_2 = id_last_position-2;
								let id_left_3 = id_last_position-3;
								let col_left_1 = $('#'+id_left_1+'').css("background-color");
								let col_left_2 = $('#'+id_left_2+'').css("background-color");
								let col_left_3 = $('#'+id_left_3+'').css("background-color");

								let id_right_1 = id_last_position+1;
								let id_right_2 = id_last_position+2;
								let id_right_3 = id_last_position+3;
								let col_right_1 = $('#'+id_right_1+'').css("background-color");
								let col_right_2 = $('#'+id_right_2+'').css("background-color");
								let col_right_3 = $('#'+id_right_3+'').css("background-color");
								//3_to_left
								if(id_left_1>=limit_left_x && id_left_2>=limit_left_x && id_left_3>=limit_left_x){
									if(player_turn==1 && col_left_1==pl1 && col_left_2==pl1 && col_left_3==pl1){
										victory="player1";
										alert("3_left!");
									} else if(player_turn==2 && col_left_1==pl2 && col_left_2==pl2 && col_left_3==pl2){
										victory="player2";
										alert("3_left!");
									}
								}
								//2_left_1_right
								if(id_left_1>=limit_left_x && id_left_2>=limit_left_x && id_right_1<=limit_right_x){
									if(player_turn==1 && col_left_1==pl1 && col_left_2==pl1 && col_right_1==pl1){
										victory="player1";
										alert("2_left_1_right!");
									} else if(player_turn==2 && col_left_1==pl2 && col_left_2==pl2 && col_right_1==pl2){
										victory="player2";
										alert("2_left_1_right!");
									}
								}
								//1_left_2_right
								if(id_left_1>=limit_left_x && id_right_1<=limit_right_x && id_right_2<=limit_right_x){
									if(player_turn==1 && col_left_1==pl1 && col_right_1==pl1 && col_right_2==pl1){
										victory="player1";
										alert("1_left_2_right!");
									} else if(player_turn==2 && col_left_1==pl2 && col_right_1==pl2 && col_right_2==pl2){
										victory="player2";
										alert("1_left_2_right!");
									}
								}
								//3_to_right
								if(id_right_1<=limit_right_x && id_right_2<=limit_right_x && id_right_3<=limit_right_x){
									if(player_turn==1 && col_right_1==pl1 && col_right_2==pl1 && col_right_3==pl1){
										victory="player1";
										alert("3_to_right!");
									} else if(player_turn==2 && col_right_1==pl2 && col_right_2==pl2 && col_right_3==pl2){
										victory="player2";
										alert("3_to_right!");
									}
								}

								//DIAG_Victory's
								let id_diag_up_left_1 = parseFloat(id_last_position) - (parseFloat(rows)+1);
								let id_diag_up_left_2 = parseFloat(id_last_position) - (parseFloat(rows*2) +2);
								let id_diag_up_left_3 = parseFloat(id_last_position) - (parseFloat(rows*3) +3);
								let col_diag_up_left_1 = $('#'+id_diag_up_left_1+'').css("background-color");
								let col_diag_up_left_2 = $('#'+id_diag_up_left_2+'').css("background-color");
								let col_diag_up_left_3 = $('#'+id_diag_up_left_3+'').css("background-color");

								let id_diag_down_left_1 = parseFloat(id_last_position) + parseFloat(rows) -1;
								let id_diag_down_left_2 = parseFloat(id_last_position) + parseFloat(rows*2) -2;
								let id_diag_down_left_3 = parseFloat(id_last_position) + parseFloat(rows*3) -3;
								let col_diag_down_left_1 = $('#'+id_diag_down_left_1+'').css("background-color");
								let col_diag_down_left_2 = $('#'+id_diag_down_left_2+'').css("background-color");
								let col_diag_down_left_3 = $('#'+id_diag_down_left_3+'').css("background-color");

								let id_diag_up_right_1 = parseFloat(id_last_position) - parseFloat(rows) +1;
								let id_diag_up_right_2 = parseFloat(id_last_position) - parseFloat(rows*2) +2;
								let id_diag_up_right_3 = parseFloat(id_last_position) - parseFloat(rows*3) +3;
								let col_diag_up_right_1 = $('#'+id_diag_up_right_1+'').css("background-color");
								let col_diag_up_right_2 = $('#'+id_diag_up_right_2+'').css("background-color");
								let col_diag_up_right_3 = $('#'+id_diag_up_right_3+'').css("background-color");

								let id_diag_down_right_1 = parseFloat(id_last_position) + parseFloat(rows) +1;
								let id_diag_down_right_2 = parseFloat(id_last_position) + parseFloat(rows*2) +2;
								let id_diag_down_right_3 = parseFloat(id_last_position) + parseFloat(rows*3) +3;
								let col_diag_down_right_1 = $('#'+id_diag_down_right_1+'').css("background-color");
								let col_diag_down_right_2 = $('#'+id_diag_down_right_2+'').css("background-color");
								let col_diag_down_right_3 = $('#'+id_diag_down_right_3+'').css("background-color");

								//3_down_left
								if(id_diag_down_left_1>=limit_down_left_1 && id_diag_down_left_2 >=limit_down_left_2 && id_diag_down_left_3>=limit_down_left_3){
									if(player_turn==1 && col_diag_down_left_1==pl1 && col_diag_down_left_2==pl1 && col_diag_down_left_3==pl1){
										victory="player1";
										alert("3_down_left!");
									} else if(player_turn==2 && col_diag_down_left_1==pl2 && col_diag_down_left_2==pl2 && col_diag_down_left_3==pl2){
										victory="player2";
										alert("3_down_left!");
									}
								}
								//2_down_left_1_up_right
								if(id_diag_down_left_1>=limit_down_left_1 && id_diag_down_left_2 >=limit_down_left_2 && id_diag_up_right_1<=limit_up_right_1){
									if(player_turn==1 && col_diag_down_left_1==pl1 && col_diag_down_left_2==pl1 && col_diag_up_right_1==pl1){
										victory="player1";
										alert("2_down_left_1_up_right!");
									} else if(player_turn==2 && col_diag_down_left_1==pl2 && col_diag_down_left_2==pl2 && col_diag_up_right_1==pl2){
										victory="player2";
										alert("2_down_left_1_up_right!");
									}
								}
								//1_down_left_2_up_right
								if(id_diag_down_left_1>=limit_down_left_1 && id_diag_up_right_1<=limit_up_right_1 && id_diag_up_right_2<=limit_up_right_2){
									if(player_turn==1 && col_diag_down_left_1==pl1 && col_diag_up_right_1==pl1 && col_diag_up_right_2==pl1){
										victory="player1";
										alert("1_down_left_2_up_right!");
									} else if(player_turn==2 && col_diag_down_left_1==pl2 && col_diag_up_right_1==pl2 && col_diag_up_right_2==pl2){
										victory="player2";
										alert("1_down_left_2_up_right!");
									}
								}
								//3_up_right
								if(id_diag_up_right_1<=limit_up_right_1 && id_diag_up_right_2<=limit_up_right_2 && id_diag_up_right_3<=limit_up_right_3){
									if(player_turn==1 && col_diag_up_right_1==pl1 && col_diag_up_right_2==pl1 && col_diag_up_right_3==pl1){
										victory="player1";
										alert("3_up_right!");
									} else if(player_turn==2 && col_diag_up_right_1==pl2 && col_diag_up_right_2==pl2 && col_diag_up_right_3==pl2){
										victory="player2";
										alert("3_up_right!");
									}
								}

								//3_dow_right
								if(id_diag_down_right_1<=limit_down_right_1 && id_diag_down_right_2<=limit_down_right_2 && id_diag_down_right_3<=limit_down_right_3){
									if(player_turn==1 && col_diag_down_right_1==pl1 && col_diag_down_right_2==pl1 && col_diag_down_right_3==pl1){
										victory="player1";
										alert("3_dow_right!");
									} else if(player_turn==2 && col_diag_down_right_1==pl2 && col_diag_down_right_2==pl2 && col_diag_down_right_3==pl2){
										victory="player2";
										alert("3_dow_right!");
									}
								}
								//2_down_right_1_up_left
								if(id_diag_down_right_1<=limit_down_right_1 && id_diag_down_right_2<=limit_down_right_2 && id_diag_up_left_1>=limit_up_left_1){
									if(player_turn==1 && col_diag_down_right_1==pl1 && col_diag_down_right_2==pl1 && col_diag_up_left_1==pl1){
										victory="player1";
										alert("2_down_right_1_up_left!");
									} else if(player_turn==2 && col_diag_down_right_1==pl2 && col_diag_down_right_2==pl2 && col_diag_up_left_1==pl2){
										victory="player2";
										alert("2_down_right_1_up_left!");
									}
								}
								//1_down_right_2_up_left
								if(id_diag_down_right_1<=limit_down_right_1 && id_diag_up_left_1>=limit_up_left_1 && id_diag_up_left_2>=limit_up_left_2){
									if(player_turn==1 && col_diag_down_right_1==pl1 && col_diag_up_left_1==pl1 && col_diag_up_left_2==pl1){
										victory="player1";
										alert("1_down_right_2_up_left!");
									} else if(player_turn==2 && col_diag_down_right_1==pl2 && col_diag_up_left_1==pl2 && col_diag_up_left_2==pl2){
										victory="player2";
										alert("1_down_right_2_up_left!");
									}
								}
								//3_up_left
								if(id_diag_up_left_1>=limit_up_left_1 && id_diag_up_left_2 >=limit_up_left_2 && id_diag_up_left_3>=limit_up_left_3){
									if(player_turn==1 && col_diag_up_left_1==pl1 && col_diag_up_left_2==pl1 && col_diag_up_left_3==pl1){
										victory="player1";
										alert("3_up_left!");
									} else if(player_turn==2 && col_diag_up_left_1==pl2 && col_diag_up_left_2==pl2 && col_diag_up_left_3==pl2){
										victory="player2";
										alert("3_up_left!");
									}
								}

								//CHANGE OR VICORY
								//game_null
								let id_marker=-1;
								let id_marker_game_null=0;
								for(let i=0; i<=rows-1; i++){
									id_marker++;
									let col_last_row = $('#'+id_marker+'').css("background-color");
									if(col_last_row!="rgb(255, 255, 255)"){
										id_marker_game_null++;
									}
								}
								console.log(id_marker_game_null)
								console.log(rows)
								if(player_turn==1 && e!=1){
									if(victory=="player1"){
										//border
										$('#map').css({
											"border-color":pl1, 
											"border-width":"5px", 
											"border-style":"solid"
										});
										//message
										alert("Victoire de "+pl1_name+" !!! "+pl2_name+" t'es pourri !")
										$('#map_div').html("<p><b>Nouvelle partie ?</b></p>");
										//count victory
										nb_victory_pl1++;
										$('#map_div').prepend("<p><b>Nombre de victoires de "+pl2_name+" : "+nb_victory_pl2+"</b></p>");
										$('#map_div').prepend("<p><b>Nombre de victoires de "+pl1_name+" : "+nb_victory_pl1+"</b></p>");
									} else {
										player_turn = 2;
										$("#p").html("<b>"+pl2_name+", à toi !</b>");
									}
								} 
								else if(player_turn==2 && e!=1){
									if(victory=="player2"){
										//border
										$('#map').css({
											"border-color":pl2, 
											"border-width":"5px", 
											"border-style":"solid"
										});
										//message
										alert("Victoire de "+pl2_name+" !!! "+pl1_name+" t'es bidon !")
										$('#map_div').html("<b>Nouvelle partie ?</b>");
										//count victory
										nb_victory_pl2++;
										$('#map_div').prepend("<p><b>Nombre de victoires de "+pl2_name+" : "+nb_victory_pl2+"</b></p>");
										$('#map_div').prepend("<p><b>Nombre de victoires de "+pl1_name+" : "+nb_victory_pl1+"</b></p>");
									} else{
										player_turn = 1;
										$("#p").html("<b>"+pl1_name+", à toi !</b>");
									}
								}
								if(id_marker_game_null==rows){
									//border
									$('#map').css({
										"border-color":"black", 
										"border-width":"5px", 
										"border-style":"solid"
									});
									//message
									alert("Match nul, bande de noobs !")
									$('#map_div').html("<b>Nouvelle partie ?</b>");
									//count victory
									$('#map_div').prepend("<p><b>Nombre de victoires de "+pl2_name+" : "+nb_victory_pl2+"</b></p>");
									$('#map_div').prepend("<p><b>Nombre de victoires de "+pl1_name+" : "+nb_victory_pl1+"</b></p>");
								}
							}
						});
					}
				}
			});
		}		

	}

	let test = new Puissance_4;

}

$("#div_plugin").plugin();