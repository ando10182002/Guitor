const imageMapping = {
    'C Major': 'cmajor.png',
    'C Minor': 'cminor.png',
    'C 7': 'c7.png',
    'C 5': 'c5.png',
    'C dim': 'cdim.png',
    'C dim7': 'cdim7.png',
    'C aug': 'caug.png',
    'C sus2': 'csus2.png',
    'C sus4': 'csus4.png',
    'C maj7': 'cmaj7.png',
    'C m7': 'cm7.png',
    'C 7sus4': 'c7sus4.png',
    'C# Major': 'ccmajor.png',
    'C# Minor': 'ccminor.png',
    'C# 7': 'cc7.png',
    'C# 5': 'cc5.png',
    'C# dim': 'ccdim.png',
    'C# dim7': 'ccdim7.png',
    'C# aug': 'ccaug.png',
    'C# sus2': 'ccsus2.png',
    'C# sus4': 'ccsus4.png',
    'C# maj7': 'ccmaj7.png',
    'C# m7': 'ccm7.png',
    'C# 7sus4': 'cc7sus4.png',
    'D Major': 'dmajor.png',
    'D Minor': 'dminor.png',
    'D 7': 'd7.png',
    'D 5': 'd5.png',
    'D dim': 'ddim.png',
    'D dim7': 'ddim7.png',
    'D aug': 'daug.png',
    'D sus2': 'dsus2.png',
    'D sus4': 'dsus4.png',
    'D maj7': 'dmaj7.png',
    'D m7': 'dm7.png',
    'D 7sus4': 'd7sus4.png',
    'D# Major': 'ddmajor.png',
    'D# Minor': 'ddminor.png',
    'D# 7': 'dd7.png',
    'D# 5': 'dd5.png',
    'D# dim': 'dddim.png',
    'D# dim7': 'dddim7.png',
    'D# aug': 'ddaug.png',
    'D# sus2': 'ddsus2.png',
    'D# sus4': 'ddsus4.png',
    'D# maj7': 'ddmaj7.png',
    'D# m7': 'ddm7.png',
    'D# 7sus4': 'dd7sus4.png',
    'E Major': 'emajor.png',
    'E Minor': 'eminor.png',
    'E 7': 'e7.png',
    'E 5': 'e5.png',
    'E dim': 'edim.png',
    'E dim7': 'edim7.png',
    'E aug': 'eaug.png',
    'E sus2': 'esus2.png',
    'E sus4': 'esus4.png',
    'E maj7': 'emaj7.png',
    'E m7': 'em7.png',
    'E 7sus4': 'e7sus4.png',
    'F Major': 'fmajor.png',
    'F Minor': 'fminor.png',
    'F 7': 'f7.png',
    'F 5': 'f5.png',
    'F dim': 'fdim.png',
    'F dim7': 'fdim7.png',
    'F aug': 'faug.png',
    'F sus2': 'fsus2.png',
    'F sus4': 'fsus4.png',
    'F maj7': 'fmaj7.png',
    'F m7': 'fm7.png',
    'F 7sus4': 'f7sus4.png',
    'F# Major': 'ffmajor.png',
    'F# Minor': 'ffminor.png',
    'F# 7': 'ff7.png',
    'F# 5': 'ff5.png',
    'F# dim': 'ffdim.png',
    'F# dim7': 'ffdim7.png',
    'F# aug': 'ffaug.png',
    'F# sus2': 'ffsus2.png',
    'F# sus4': 'ffsus4.png',
    'F# maj7': 'ffmaj7.png',
    'F# m7': 'ffm7.png',
    'F# 7sus4': 'ff7sus4.png',
    'G Major': 'gmajor.png',
    'G Minor': 'gminor.png',
    'G 7': 'g7.png',
    'G 5': 'g5.png',
    'G dim': 'gdim.png',
    'G dim7': 'gdim7.png',
    'G aug': 'gaug.png',
    'G sus2': 'gsus2.png',
    'G sus4': 'gsus4.png',
    'G maj7': 'gmaj7.png',
    'G m7': 'gm7.png',
    'G 7sus4': 'g7sus4.png',
    'G# Major': 'ggmajor.png',
    'G# Minor': 'ggminor.png',
    'G# 7': 'ggm7.png',
    'G# 5': 'gg5.png',
    'G# dim': 'ggdim.png',
    'G# dim7': 'ggdim7.png',
    'G# aug': 'ggaug.png',
    'G# sus2': 'ggsus2.png',
    'G# sus4': 'ggsus4.png',
    'G# maj7': 'ggmaj7.png',
    'G# m7': 'ggm7.png',
    'G# 7sus4': 'gg7sus4.png',
    'A Major': 'amajor.png',
    'A Minor': 'aminor.png',
    'A 7': 'a7.png',
    'A 5': 'a5.png',
    'A dim': 'adim.png',
    'A dim7': 'adim7.png',
    'A aug': 'aaug.png',
    'A sus2': 'asus2.png',
    'A sus4': 'asus4.png',
    'A maj7': 'amaj7.png',
    'A m7': 'am7.png',
    'A 7sus4': 'a7sus4.png',
    'A# Major': 'aamajor.png',
    'A# Minor': 'aaminor.png',
    'A# 7': 'aa7.png',
    'A# 5': 'aa5.png',
    'A# dim': 'aadim.png',
    'A# dim7': 'aadim7.png',
    'A# aug': 'aaaug.png',
    'A# sus2': 'aasus2.png',
    'A# sus4': 'aasus4.png',
    'A# maj7': 'aamaj7.png',
    'A# m7': 'aam7.png',
    'A# 7sus4': 'aa7sus4.png',
    'B Major': 'bmajor.png',
    'B Minor': 'bminor.png',
    'B 7': 'b7.png',
    'B 5': 'b5.png',
    'B dim': 'bdim.png',
    'B dim7': 'bdim7.png',
    'B aug': 'baug.png',
    'B sus2': 'bsus2.png',
    'B sus4': 'bsus4.png',
    'B maj7': 'bmaj7.png',
    'B m7': 'bm7.png',
    'B 7sus4': 'b7sus4.png',
  };
  const noteSlider = document.getElementById('note-slider');
  const chordSlider = document.getElementById('chord-slider');
  const selectedNote = document.getElementById('selected-note');
  const selectedChord = document.getElementById('selected-chord');
  const selectedImage = document.getElementById('selected-image');
  const searchInput = document.getElementById('search-input');
  const suggestionList = document.getElementById('suggestion-list');
  
  // Define an array of chords and notes for auto-suggest
  const chordsAndNotes = [
      'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
      'Major', 'Minor', '7', '5', 'dim', 'dim7', 'aug', 'sus2', 'sus4', 'maj7', 'm7', '7sus4'
  ];
  
  // Function to filter the auto-suggest options based on the user's input
  function filterOptions(input) {
      const inputValue = input.toLowerCase();
      return chordsAndNotes.filter(option => option.toLowerCase().includes(inputValue));
  }
  
  // Function to display the auto-suggest options
  function showOptions(options) {
      // Remove previous suggestions
      while (suggestionList.firstChild) {
          suggestionList.removeChild(suggestionList.firstChild);
      }
  
      // Create and append new suggestion items
      options.forEach(option => {
          const suggestionItem = document.createElement('li');
          suggestionItem.textContent = option;
          suggestionItem.addEventListener('click', () => {
              searchInput.value = option;
              suggestionList.innerHTML = '';
          });
          suggestionList.appendChild(suggestionItem);
      });
  
      // Show the suggestion list
      suggestionList.style.display = 'block';
  }
  
  function updateSelection() {
      const note = noteSlider.value;
      const chord = chordSlider.value;
  
      selectedNote.textContent = note;
      selectedChord.textContent = chord;
  
      const imageKey = note + ' ' + chord;
      const imageUrl = imageMapping[imageKey];
  
      if (imageUrl) {
          selectedImage.src = imageUrl;
          selectedImage.style.display = 'block';
      } else {
          selectedImage.style.display = 'none';
      }
  }
  
  function handleSearchButtonClick(event) {
      event.preventDefault();
  
      const searchValue = searchInput.value.trim().toLowerCase();
  
      if (searchValue === '') {
          return;
      }
  
      const searchForm = document.getElementById('search-form');
      searchForm.submit();
  }
  
  function extractChordsFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      const chords = urlParams.get('chords');
  
      if (chords) {
          const trimmedChords = chords.trim().toLowerCase();
  
          if (trimmedChords === 'pitch detector') {
              window.location.href = 'tnr.html'; // Redirect to tabs.html
              return;
          } else if (trimmedChords === 'chord') {
              window.location.href = '.html'; // Redirect to songs.html
              return;
          } else if (trimmedChords === 'bahay kubo') {
              window.location.href = 'song1.html';
              return;
          } else if (trimmedChords === 'leron leron sinta') {
              window.location.href = 'song2.html';
              return;
          } else if (trimmedChords === 'paruparong bukid') {
              window.location.href = 'song3.html';
              return;
          } else if (trimmedChords === 'sitsiritsit alibangbang') {
              window.location.href = 'song4.html';
              return;
          }
  
          const regex = /(.+)\s(.+)/;
          const matches = trimmedChords.match(regex);
  
          if (matches) {
              const note = matches[1].trim().toUpperCase();
              const chord = matches[2].trim().toLowerCase();
  
              const noteOptions = noteSlider.options;
              const chordOptions = chordSlider.options;
  
              for (let i = 0; i < noteOptions.length; i++) {
                  if (noteOptions[i].value === note) {
                      noteSlider.selectedIndex = i;
                      break;
                  }
              }
              for (let i = 0; i < chordOptions.length; i++) {
                  if (chordOptions[i].value.toLowerCase() === chord) {
                      chordSlider.selectedIndex = i;
                      break;
                  }
              }
              updateSelection();
          }
      }
  }
  
  noteSlider.addEventListener('change', updateSelection);
  chordSlider.addEventListener('change', updateSelection);
  window.addEventListener('DOMContentLoaded', extractChordsFromURL);
  
  // Event listener for search input keyup
  searchInput.addEventListener('keyup', () => {
      const inputValue = searchInput.value.trim();
      const filteredOptions = filterOptions(inputValue);
  
      // Show auto-suggest options if there are any
      if (filteredOptions.length > 0) {
          showOptions(filteredOptions);
      } else {
          suggestionList.style.display = 'none';
      }
  });
  
  // Event listener for search button click
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchButtonClick);
  
  updateSelection();
