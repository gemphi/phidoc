import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  phiSidebar: [
    {
      type: 'category',
      label: 'Phi',
      collapsible: true,
      collapsed: false,
      items: [
        'phi/intro',
        {
          type: 'category',
          label: 'Crates',
          items: [
            'phi/crates/phi-oml',
            'phi/crates/phifly',
            'phi/crates/phigum',
            'phi/crates/appkit',
            'phi/crates/puikit',
            'phi/crates/kitpro',
          ],
        },
        {
          type: 'category',
          label: 'Apple SDK Docs',
          items: [
            'phi/sdk/arkit',
            'phi/sdk/uikit',
            'phi/sdk/foundation',
            'phi/sdk/realitykit',
            'phi/sdk/swift',
          ],
        },
        {
          type: 'category',
          label: 'Architecture',
          items: [
            'phi/architecture/layer-architecture',
            'phi/architecture/layout-system',
            'phi/architecture/gpu-pipeline',
          ],
        },
      ],
    },
  ],

  phixumSidebar: [
    {
      type: 'category',
      label: 'Phixum',
      collapsible: true,
      collapsed: false,
      items: [
        'phixum/intro',
        {
          type: 'category',
          label: 'Architecture',
          items: [
            'phixum/architecture/overview',
            'phixum/architecture/crate-graph',
            'phixum/architecture/concurrency-model',
          ],
        },
        {
          type: 'category',
          label: 'Crates',
          items: [
            'phixum/crates/phixum-model',
            'phixum/crates/phixum-pricing',
            'phixum/crates/phixum-strategy',
            'phixum/crates/phixum-execution',
            'phixum/crates/phixum-risk',
            'phixum/crates/phixum-ml',
            'phixum/crates/phixum-node',
          ],
        },
        {
          type: 'category',
          label: 'Flows',
          items: [
            'phixum/flows/flow-overview',
            'phixum/flows/flow-01',
            'phixum/flows/flow-02',
          ],
        },
        {
          type: 'category',
          label: 'Infrastructure',
          items: [
            'phixum/infra/terraform',
            'phixum/infra/kubernetes',
            'phixum/infra/ci-cd',
          ],
        },
      ],
    },
  ],

  sharedSidebar: [
    {
      type: 'category',
      label: 'Shared',
      collapsible: true,
      collapsed: false,
      items: [
        'shared/intro',
        'shared/diem-standards',
        'shared/contributing',
        'shared/readme-format',
      ],
    },
  ],
};

export default sidebars;
