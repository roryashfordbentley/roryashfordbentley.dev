import type { Meta, StoryObj } from '@storybook/nextjs'

import { Prose } from './Prose'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import { HTMLRenderer } from '@components/HTMLRenderer/HTMLRenderer'
import { Container, ContainerItem } from '../Container/Container'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Prose',
  component: Prose,
  decorators: [
    (Story) => (
      /**
       * Prose expects to be wrapped in a Container component as it inherits the main grid as a subgrid.
       */
      <Container>
        <ContainerItem>
          <Story />
        </ContainerItem>
      </Container>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Prose>

export default meta

export const Default: Story = {
  args: {
    children: (
      <HTMLRenderer
        html={`<h2>Marvel Cinematic Universe</h2>

      <p>The Marvel Cinematic Universe (MCU) is a media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The franchise has expanded to include comic books, short films, television series, and digital series. The shared universe is established by crossing over common plot elements, settings, cast, and characters.</p>

      <h3>Phase One</h3>

      <h4>Iron Man (2008)</h4>

      <p>The Marvel Cinematic Universe (MCU) began with <strong>Iron Man</strong>, released in 2008. It introduced us to Tony Stark, a genius billionaire who becomes the armored superhero. <a href="https://en.wikipedia.org/wiki/Iron_Man_(2008_film)">Wikipedia Page</a>.</p>

      <ul>
        <li>Directed by Jon Favreau</li>
        <li>Starring Robert Downey Jr.</li>
        <li>Grossed over $585 million worldwide</li>
      </ul>

      <h4>The Avengers (2012)</h4>

      <p>The first phase culminated in <em>The Avengers</em>, where Earth's mightiest heroes came together to stop Loki and his alien army.</p>

      <ol>
        <li>Directed by Joss Whedon</li>
        <li>Starring
          <ul>
            <li>Robert Downey Jr.</li>
            <li>Chris Evans</li>
            <li>Mark Ruffalo</li>
            <li>Chris Hemsworth</li>
            <li>Scarlett Johansson</li>
            <li>Jeremy Renner</li>
          </ul>
        </li>
        <li>Grossed over $1.5 billion worldwide</li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Year</th>
            <th>Box Office</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Iron Man</td>
            <td>2008</td>
            <td>$585 million</td>
          </tr>

          <tr>
            <td>The Avengers</td>
            <td>2012</td>
            <td>$1.5 billion</td>
          </tr>
        </tbody>
      </table>

      <hr/>

      <h3>Phase Two</h3>

      <h4>Guardians of the Galaxy (2014)</h4>

      <p><strong>Guardians of the Galaxy</strong> expanded the MCU into the cosmos, introducing a new team of heroes including Star-Lord, Gamora, Drax, Rocket, and Groot.</p>

      <ul>
        <li>Directed by James Gunn</li>
        <li>Starring Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, and Bradley Cooper</li>
        <li>Grossed over $773 million worldwide</li>
      </ul>

      <h4>Avengers: Age of Ultron</h4>

      <h5>2015</h5>

      <p>The Avengers reassemble to face Ultron, an artificial intelligence bent on human extinction.</p>

      <ol>
        <li>Directed by Joss Whedon</li>
        <li>Starring Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, and Jeremy Renner</li>
        <li>Grossed over $1.4 billion worldwide</li>
      </ol>

      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Year</th>
            <th>Box Office</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Guardians of the Galaxy</td>
            <td>2014</td>
            <td>$773 million</td>
          </tr>

          <tr>
            <td>Avengers: Age of Ultron</td>
            <td>2015</td>
            <td>$1.4 billion</td>
          </tr>
        </tbody>
      </table>`}
      />
    ),
  },
}
