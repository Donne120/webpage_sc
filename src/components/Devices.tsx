/**
 * Student Companion AI branded devices: a graphite laptop, tablet and
 * phone with gold Student Companion AI branding, drawn in CSS (see
 * "Branded devices" in styles.css) so they stay sharp at any size. Each
 * shows a real product screenshot.
 */
import logoImg from "@/assets/logo-new.png";

function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className={`device-brand${small ? " device-brand-sm" : ""}`}>
      <img src={logoImg} alt="" aria-hidden />
      Student Companion AI
    </span>
  );
}

type ScreenProps = { src: string; alt: string; eager?: boolean; className?: string };

export function Laptop({ src, alt, eager = false, className = "" }: ScreenProps) {
  return (
    <div className={`device-laptop ${className}`}>
      <div className="device-laptop-lid">
        <span className="device-cam" aria-hidden />
        <img
          className="device-laptop-screen"
          src={src}
          alt={alt}
          width={1280}
          height={800}
          loading={eager ? "eager" : "lazy"}
        />
        <Brand />
      </div>
      <div className="device-laptop-base" aria-hidden />
    </div>
  );
}

export function Tablet({ src, alt, eager = false, className = "" }: ScreenProps) {
  return (
    <div className={`device-tablet device-gold-frame ${className}`}>
      <div className="device-tablet-inner">
        <span className="device-cam" aria-hidden />
        <img
          className="device-tablet-screen"
          src={src}
          alt={alt}
          width={1180}
          height={820}
          loading={eager ? "eager" : "lazy"}
        />
        <Brand small />
      </div>
    </div>
  );
}

export function Phone({ src, alt, eager = false, className = "" }: ScreenProps) {
  return (
    <div className={`device-phone ${className}`}>
      <div className="device-phone-body">
        <span className="device-phone-btn device-phone-btn-1" aria-hidden />
        <span className="device-phone-btn device-phone-btn-2" aria-hidden />
        <span className="device-phone-btn device-phone-btn-3" aria-hidden />
        <div className="device-gold-frame device-phone-frame">
          <div className="device-phone-inner">
            <span className="device-phone-island" aria-hidden />
            <div className="device-phone-display">
              <div className="device-phone-status" aria-hidden>
                <span>9:41</span>
                <span className="device-phone-icons">
                  <i style={{ width: "1.2cqw", height: "2cqw" }} />
                  <i style={{ width: "1.2cqw", height: "2.8cqw" }} />
                  <i style={{ width: "1.2cqw", height: "3.6cqw" }} />
                  <i
                    style={{
                      width: "7cqw",
                      height: "3.6cqw",
                      borderRadius: "0.8cqw",
                      marginLeft: "1.6cqw",
                    }}
                  />
                </span>
              </div>
              <img
                className="device-phone-screen"
                src={src}
                alt={alt}
                width={390}
                height={844}
                loading={eager ? "eager" : "lazy"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The back of a Student Companion AI phone: the gold logo and name. */
export function PhoneBack({ className = "" }: { className?: string }) {
  return (
    <div
      className={`device-phone-back ${className}`}
      role="img"
      aria-label="A Student Companion AI branded phone"
    >
      <div className="device-gold-frame device-phone-back-shell">
        <div className="device-phone-back-panel">
          <span className="device-phone-cams" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <img src={logoImg} alt="" className="device-phone-back-logo" />
          <span className="device-phone-back-name">
            Student
            <br />
            Companion AI
          </span>
        </div>
      </div>
    </div>
  );
}
