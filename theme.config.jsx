import { useRouter } from 'next/router';

export default {
    logo: <span>Orion® Docs</span>,
    project: {
      link: 'https://github.com/exprays/orion'
    },
    footer: {
      text: (
        <span>
          MIT {new Date().getFullYear()} ©{' '}
          <a href="https://nextra.site" target="_blank">
            Orion
          </a>
          .
        </span>
      )
    },
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – ORION'
        }
      }
    },
    banner: {
      key: '1.0-release',
      text: (
        <a href="https://orion.thestarsociety.tech/changelog" target="_blank">
          🎉 Orion 1.0.0 nightly is released. Read more →
        </a>
      )
    }
    // ... other theme options
  }