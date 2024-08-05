import { Paper } from '@mui/material'
import { formatYear, RtEvent } from '../../types'

interface Props {
  rtEvent: RtEvent
}

export function RtBody({ rtEvent }: Props) {
  return (
    <Paper id="RtBody">
      <div id="RtEntrySidebar">
        <h1>{formatYear(rtEvent.year)}</h1>
        <img
          src="./49---45-bce.png"
          alt="Caesar"
          className="rt-entry-sidebar-map"
        />
        <div className="rt-entry-sidebar-references">
          <h3>Themes</h3>
          <ul className="rt-entry-sidebar-themes">
            <li>Caesar&rsquo;s Civil War</li>
          </ul>
          <h3>Sources</h3>
          <ul className="rt-entry-sidebar-themes">
            <li>
              <a href="https://www.livius.org/sources/content/appian/appian-caesars-funeral/">
                Apian on Caesar's Funeral
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="RtEntryContent">
        <h2>{rtEvent.event}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          maiores neque suscipit consequatur, autem ut soluta, alias quod fuga
          facere aperiam est! Est aliquam consectetur corrupti aliquid ipsa
          nostrum sequi!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          corporis, est omnis facilis quidem nemo cum consectetur voluptatibus
          fugit rem excepturi recusandae quo repudiandae dolorem doloremque?
          Nobis eligendi maiores pariatur. Sit amet consectetur adipisicing
          elit. Delectus corporis, est omnis facilis quidem nemo cum consectetur
        </p>
        <p>
          Aperiam est! Est aliquam consectetur corrupti aliquid ipsa nostrum
        </p>
      </div>
    </Paper>
  )
}
