import InitialState from "./initialState.json";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Main from "./components/Main";
import MainSlider from "./components/MainSlider";
import Section from "./components/Section";
import TopCards from "./components/TopCards";
import BottomCards from "./components/BottomCards";
import FromTheBlog from "./components/FromTheBlog";
import QuickLinks from "./components/QuickLinks";
import LatestTweets from "./components/LatestTweets";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header>
        <Logo logo_text={InitialState.logo_text} />
        <Nav nav_list={InitialState.nav_items} />
      </Header>
      <Main>
        <Section className="slider-section">
          <MainSlider cards={InitialState.slider_cards} />
        </Section>
        <Section className="cards-section">
          <TopCards cards={InitialState.top_cards} />
          <BottomCards
            title={InitialState.cards_section_title}
            cards={InitialState.bottom_cards}
          />
        </Section>
        <Section className="info-section">
          <FromTheBlog data={InitialState.info_section.form_the_blog} />
          <QuickLinks data={InitialState.info_section.links_list} />
          <LatestTweets data={InitialState.info_section.latest_tweets} />
          <Form data={InitialState.info_section.form} />
        </Section>
      </Main>
      <Footer>
        <p className="copyrating">{InitialState.footer_text.copyrating}</p>
        <p className="author">{InitialState.footer_text.author}</p>
      </Footer>
    </div>
  );
}

export default App;
