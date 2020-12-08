import './index.scss';

export default function Logo({ size = 'normal' }) {
  return <div className={`logo-${size}`}>
    <div class="logo-wrapper">
      <div class="bar-1-1">
      </div>
      <div class="bar-1-2">
      </div>
      <div class="bar-2-1">
      </div>
      <div class="bar-2-2">
      </div>

      <div class="red-background">
      </div>
      {/* <div class="white-patch"></div>
      <div class="logo">
        <p>Индикатор</p>
      </div> */}
      <div class="black-shadow">
      </div>
    </div>
  </div>
}