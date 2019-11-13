import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';

class Main extends Component {
  state = {}

  componentDidMount = () => {
    const config = {
      origin: 'right',
      duration: 2000,
      delay: 150,
      distance: '1000px',
      scale: 1,
      easing: 'ease',
    }
    ScrollReveal().reveal(this.refs.div, config);

  }

  render() {
    return (
      <section style={{ overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden' }} ref='div'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus unde rerum vitae quibusdam consequatur totam impedit ipsum obcaecati, deleniti, molestiae illo, mollitia corrupti! Dolores illum molestiae a totam. Rerum ex dignissimos facilis nisi architecto sit vitae maxime molestiae deserunt unde sequi mollitia autem fugit soluta alias repellendus, esse dolores numquam necessitatibus harum. Voluptas quaerat hic nostrum minus. Ullam expedita nihil delectus, enim deserunt dolorum facere eos obcaecati magnam incidunt modi rem consequatur at? Alias sunt possimus, ut veniam dicta quas iure totam laboriosam repellat rem a doloremque dolore eaque repudiandae tenetur. Ut et repellat sit autem est magnam adipisci aliquid, tempora totam error ratione tempore beatae voluptates optio, neque sapiente suscipit necessitatibus dolorem, earum natus omnis nam! Expedita vitae sunt id, aperiam velit consequuntur, fuga facere accusamus, totam architecto unde ex reiciendis temporibus qui dolore ducimus ipsa optio! Corporis placeat pariatur quod ex? Ratione a culpa doloremque eos aspernatur rerum pariatur molestias reiciendis. Obcaecati consectetur similique doloribus quibusdam architecto neque eius aperiam rerum nam temporibus voluptates assumenda, necessitatibus minima quos molestias voluptate fuga, ipsum, nobis aut tempore labore dolore reiciendis. Quam illum consectetur facilis itaque possimus nostrum cumque iusto doloribus quis? Quibusdam nihil labore magni id illum, corrupti quasi eaque ab autem maiores ad explicabo minima assumenda repellat perspiciatis atque ducimus facilis facere? Magni dolor ex earum ea ullam veritatis minima placeat ducimus sit, praesentium, totam esse iure repudiandae odio laboriosam veniam, cumque reiciendis laborum est omnis itaque reprehenderit facere. Perspiciatis accusamus eveniet cum suscipit tempore animi dolores. Officia at, possimus ipsam ex rem ratione doloribus veniam illo quam, vitae earum quae optio eius corrupti sit magni culpa iusto blanditiis repellendus fugit! Magnam quod suscipit natus eum illo sed assumenda tempore rerum. Praesentium nulla tenetur suscipit excepturi magni, dicta consequuntur necessitatibus aliquam officiis sit ut. Fuga repellat minus impedit sequi hic optio consequuntur aliquam? Accusamus inventore magnam a, fugiat error eveniet asperiores expedita repudiandae? Labore natus ex et animi sapiente? Nulla numquam totam nihil facere qui autem eius quas laboriosam nisi reprehenderit quisquam, nesciunt tenetur suscipit nostrum, esse magni eaque sit reiciendis atque ipsa quae, ducimus iste! Nostrum optio fugiat rerum quaerat expedita aliquam, eveniet, voluptatem quo eaque sunt distinctio libero voluptatibus modi nam laborum odio corrupti eum consectetur deleniti quae neque blanditiis. Velit corporis dolore incidunt dicta, delectus quos, impedit vero temporibus omnis sit fugit magnam distinctio aliquid facilis consequatur earum voluptatibus id! Voluptates numquam culpa cum quaerat corrupti rem deserunt nulla pariatur praesentium deleniti possimus eaque expedita molestiae minima, voluptatem architecto necessitatibus! Eaque unde et, neque a fugiat facilis illum deleniti iure distinctio ex impedit esse dolores voluptatum ullam natus quae cum eius maiores ab. Inventore minima excepturi ipsum impedit reprehenderit perferendis nobis, velit quia minus voluptate debitis ducimus? Vero, consequuntur dignissimos. Ad, tempore ullam molestiae est sit error voluptatibus perspiciatis exercitationem, facilis dolorum sed. Harum rem nesciunt omnis neque dolorum unde tempora! Maxime officiis, iste aspernatur rem itaque sunt. Reiciendis aliquid atque fuga animi quis consectetur odio quod minus magni itaque. Delectus porro fuga iste repudiandae!</div>
      </section>
    );
  }
}

export default Main;