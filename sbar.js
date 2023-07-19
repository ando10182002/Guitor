const imageMapping = {
    'C Major': 'img/cmajor.png',
    'C Minor': 'img/cminor.png',
    'C 7': 'img/c7.png',
    'C 5': 'img/c5.png',
    'C dim': 'img/cdim.png',
    'C dim7': 'img/cdim7.png',
    'C aug': 'img/caug.png',
    'C sus2': 'img/csus2.png',
    'C sus4': 'img/csus4.png',
    'C maj7': 'img/cmaj7.png',
    'C m7': 'img/cm7.png',
    'C 7sus4': 'img/c7sus4.png',
    'C# Major': 'img/ccmajor.png',
    'C# Minor': 'img/ccminor.png',
    'C# 7': 'img/cc7.png',
    'C# 5': 'img/cc5.png',
    'C# dim': 'img/ccdim.png',
    'C# dim7': 'img/ccdim7.png',
    'C# aug': 'img/ccaug.png',
    'C# sus2': 'img/ccsus2.png',
    'C# sus4': 'img/ccsus4.png',
    'C# maj7': 'img/ccmaj7.png',
    'C# m7': 'img/ccm7.png',
    'C# 7sus4': 'img/cc7sus4.png',
    'D Major': 'img/dmajor.png',
    'D Minor': 'img/dminor.png',
    'D 7': 'img/d7.png',
    'D 5': 'img/d5.png',
    'D dim': 'img/ddim.png',
    'D dim7': 'img/ddim7.png',
    'D aug': 'img/daug.png',
    'D sus2': 'img/dsus2.png',
    'D sus4': 'img/dsus4.png',
    'D maj7': 'img/dmaj7.png',
    'D m7': 'img/dm7.png',
    'D 7sus4': 'img/d7sus4.png',
    'D# Major': 'img/ddmajor.png',
    'D# Minor': 'img/ddminor.png',
    'D# 7': 'img/dd7.png',
    'D# 5': 'img/dd5.png',
    'D# dim': 'img/dddim.png',
    'D# dim7': 'img/dddim7.png',
    'D# aug': 'img/ddaug.png',
    'D# sus2': 'img/ddsus2.png',
    'D# sus4': 'img/ddsus4.png',
    'D# maj7': 'img/ddmaj7.png',
    'D# m7': 'img/ddm7.png',
    'D# 7sus4': 'img/dd7sus4.png',
    'E Major': 'img/emajor.png',
    'E Minor': 'img/eminor.png',
    'E 7': 'img/e7.png',
    'E 5': 'img/e5.png',
    'E dim': 'img/edim.png',
    'E dim7': 'img/edim7.png',
    'E aug': 'img/eaug.png',
    'E sus2': 'img/esus2.png',
    'E sus4': 'img/esus4.png',
    'E maj7': 'img/emaj7.png',
    'E m7': 'img/em7.png',
    'E 7sus4': 'img/e7sus4.png',
    'F Major': 'img/fmajor.png',
    'F Minor': 'img/fminor.png',
    'F 7': 'img/f7.png',
    'F 5': 'img/f5.png',
    'F dim': 'img/fdim.png',
    'F dim7': 'img/fdim7.png',
    'F aug': 'img/faug.png',
    'F sus2': 'img/fsus2.png',
    'F sus4': 'img/fsus4.png',
    'F maj7': 'img/fmaj7.png',
    'F m7': 'img/fm7.png',
    'F 7sus4': 'img/f7sus4.png',
    'F# Major': 'img/ffmajor.png',
    'F# Minor': 'img/ffminor.png',
    'F# 7': 'img/ff7.png',
    'F# 5': 'img/ff5.png',
    'F# dim': 'img/ffdim.png',
    'F# dim7': 'img/ffdim7.png',
    'F# aug': 'img/ffaug.png',
    'F# sus2': 'img/ffsus2.png',
    'F# sus4': 'img/ffsus4.png',
    'F# maj7': 'img/ffmaj7.png',
    'F# m7': 'img/ffm7.png',
    'F# 7sus4': 'img/ff7sus4.png',
    'G Major': 'img/gmajor.png',
    'G Minor': 'img/gminor.png',
    'G 7': 'img/g7.png',
    'G 5': 'img/g5.png',
    'G dim': 'img/gdim.png',
    'G dim7': 'img/gdim7.png',
    'G aug': 'img/gaug.png',
    'G sus2': 'img/gsus2.png',
    'G sus4': 'img/gsus4.png',
    'G maj7': 'img/gmaj7.png',
    'G m7': 'img/gm7.png',
    'G 7sus4': 'img/g7sus4.png',
    'G# Major': 'img/ggmajor.png',
    'G# Minor': 'img/ggminor.png',
    'G# 7': 'img/ggm7.png',
    'G# 5': 'img/gg5.png',
    'G# dim': 'img/ggdim.png',
    'G# dim7': 'img/ggdim7.png',
    'G# aug': 'img/ggaug.png',
    'G# sus2': 'img/ggsus2.png',
    'G# sus4': 'img/ggsus4.png',
    'G# maj7': 'img/ggmaj7.png',
    'G# m7': 'img/ggm7.png',
    'G# 7sus4': 'img/gg7sus4.png',
    'A Major': 'img/amajor.png',
    'A Minor': 'img/aminor.png',
    'A 7': 'img/a7.png',
    'A 5': 'img/a5.png',
    'A dim': 'img/adim.png',
    'A dim7': 'img/adim7.png',
    'A aug': 'img/aaug.png',
    'A sus2': 'img/asus2.png',
    'A sus4': 'img/asus4.png',
    'A maj7': 'img/amaj7.png',
    'A m7': 'img/am7.png',
    'A 7sus4': 'img/a7sus4.png',
    'A# Major': 'img/aamajor.png',
    'A# Minor': 'img/aaminor.png',
    'A# 7': 'img/aa7.png',
    'A# 5': 'img/aa5.png',
    'A# dim': 'img/aadim.png',
    'A# dim7': 'img/aadim7.png',
    'A# aug': 'img/aaaug.png',
    'A# sus2': 'img/aasus2.png',
    'A# sus4': 'img/aasus4.png',
    'A# maj7': 'img/aamaj7.png',
    'A# m7': 'img/aam7.png',
    'A# 7sus4': 'img/aa7sus4.png',
    'B Major': 'img/bmajor.png',
    'B Minor': 'img/bminor.png',
    'B 7': 'img/b7.png',
    'B 5': 'img/b5.png',
    'B dim': 'img/bdim.png',
    'B dim7': 'img/bdim7.png',
    'B aug': 'img/baug.png',
    'B sus2': 'img/bsus2.png',
    'B sus4': 'img/bsus4.png',
    'B maj7': 'img/bmaj7.png',
    'B m7': 'img/bm7.png',
    'B 7sus4': 'img/b7sus4.png',
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
  
          if (trimmedChords === 'tabs') {
              window.location.href = '3.html'; // Redirect to tabs.html
              return;
          } else if (trimmedChords === 'songs') {
              window.location.href = '2.html'; // Redirect to songs.html
              return;
          } else if (trimmedChords === 'tuner') {
              window.location.href = '3.html';
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