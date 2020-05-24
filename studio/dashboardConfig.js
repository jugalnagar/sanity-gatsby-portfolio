export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eca019a45228a5ea379995f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9rf6seog',
                  apiId: '47b1ea6b-a266-4759-a893-7fdade832023'
                },
                {
                  buildHookId: '5eca019a45228aa44e7991ce',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-37d94sk8',
                  apiId: 'bda3dc80-6628-452a-a79d-b8683079422a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jugalnagar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-37d94sk8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
