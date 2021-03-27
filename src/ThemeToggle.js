import React from 'react';
import {ThemeContext, themes} from './ThemeContext';
import ThemeTogglerButton from './ThemeTogglerButton';

class ThemeTutorial extends React.Component {
  constructor(props) {
    super(props);//it gives access to this statement afterwards

    this.toggleTheme = () => {
      this.setState(state => ({theme: state.theme === themes.dark ? themes.light : themes.dark,}));
      //if state.theme is equal to themes.dark then set it to themes.light else themes.dark
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content /> 
        {/* Content just include the themeTogglerButton */}
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default ThemeTutorial;