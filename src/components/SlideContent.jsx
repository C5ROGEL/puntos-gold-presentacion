import React from "react";

const SlideContent = ({ slide }) => {
  // Slide de Portada
  if (slide.type === "cover") {
    return (
      <div className="slide-cover">
        <div className="university-header">
          <h3>Universidad Tecnológica de El Salvador</h3>
          <p className="subtitle-small">{slide.content.materia}</p>
          <p className="subtitle-small">
            Catedrático: {slide.content.catedratico}
          </p>
        </div>

        <div className="main-title-section">
          <h1 className="main-title">{slide.title}</h1>
          <p className="main-subtitle">{slide.subtitle}</p>
        </div>

        <div className="team-section">
          <h4>Integrantes:</h4>
          <div className="team-grid">
            {slide.content.integrantes?.map((integrante, idx) => (
              <div key={idx} className="team-member">
                <span className="member-name">{integrante.nombre}</span>
                <span className="member-carnet">{integrante.carnet}</span>
              </div>
            )) || <p>No hay integrantes</p>}
          </div>
        </div>
      </div>
    );
  }

  // Slide de Introducción
  if (slide.type === "intro") {
    return (
      <div className="slide-intro">
        <h2 className="slide-title">{slide.title}</h2>
        <div className="tech-badges">
          <span className="tech-badge">SwiftUI</span>
          <span className="tech-badge">Flutter</span>
          <span className="tech-badge">REACT</span>
        </div>

        <div className="intro-content">
          {slide.content?.map((paragraph, idx) => (
            <p key={idx} className="intro-paragraph">
              {paragraph}
            </p>
          )) || <p>No hay contenido</p>}
        </div>
      </div>
    );
  }

  // Slide de Capítulo
  if (slide.type === "chapter") {
    return (
      <div className="slide-chapter">
        <div className="chapter-icon">{slide.icon || "📄"}</div>
        <h2 className="chapter-title">{slide.title}</h2>
        {slide.subtitle && <p className="chapter-subtitle">{slide.subtitle}</p>}
      </div>
    );
  }

  // Slide de Contenido NORMAL (sections)
  if (slide.type === "content") {
    return (
      <div className="slide-content">
        <h2 className="slide-title">{slide.title}</h2>
        <div className="content-sections">
          {slide.sections?.map((section, idx) => (
            <div key={idx} className="content-section">
              <h3 className="section-heading">{section.heading}</h3>

              {section.content && (
                <p className="section-text">{section.content}</p>
              )}

              {/* Gráfico SOLO para la sección de rendimiento */}
              {section.heading === "Consumo en apps complejas" && (
                <>
                  <div className="metric-row">
                    <span>Consumo CPU (apps complejas)</span>
                    <div className="metric-bar-container">
                      <div
                        className="metric-bar metric-bar-swift"
                        style={{ width: "70%" }}
                      >
                        SwiftUI
                      </div>
                      <div
                        className="metric-bar metric-bar-rn"
                        style={{ width: "90%" }}
                      >
                        React Native
                      </div>
                    </div>
                  </div>
                </>
              )}

              {section.items && (
                <ul className="section-list">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((sub, i) => (
                <div key={i} className="subsection">
                  <h4 className="subsection-title">{sub.title}</h4>
                  {sub.content && <p>{sub.content}</p>}
                  {sub.items?.map((item, j) => (
                    <ul key={j} className="subsection-list">
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          )) || <p>No hay secciones</p>}
        </div>
      </div>
    );
  }

  // Slide de Contenido con GRID (columns)
  if (slide.type === "content-grid") {
    return (
      <div className="slide-content">
        <h2 className="slide-title">{slide.title}</h2>
        <div className="content-grid">
          {slide.columns?.map((column, idx) => (
            <div key={idx} className="grid-column">
              <h3 className="section-heading">{column.heading}</h3>
              {column.content && (
                <p className="section-text">{column.content}</p>
              )}
              {column.items?.map((item, i) => (
                <ul key={i} className="section-list">
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          )) || <p>No hay columnas</p>}
        </div>
      </div>
    );
  }

  // Slide de Conclusión
  if (slide.type === "conclusion") {
    return (
      <div className="slide-conclusion">
        <h2 className="slide-title">{slide.title}</h2>
        {slide.content && <p className="conclusion-intro">{slide.content}</p>}
        <ul className="conclusion-list">
          {slide.items?.map((item, idx) => (
            <li key={idx} className="conclusion-item">
              <span className="check-icon">✓</span>
              {item}
            </li>
          )) || <p>No hay items</p>}
        </ul>
      </div>
    );
  }

  // Fallback
  return (
    <div className="slide-content">
      <h2>{slide.title || "Slide"}</h2>
      <p>Tipo de slide no reconocido: {slide.type}</p>
      <pre>{JSON.stringify(slide, null, 2)}</pre>
    </div>
  );
};

export default SlideContent;
