module.exports = {
  types: [
    {
      value: 'WIP',
      name: '🚧 WIP: Work in progress',
    },
    {
      value: 'feat',
      name: '✨ feat: A new feature',
    },
    {
      value: 'fix',
      name: '🐛 fix: A bug fix',
    },
    {
      value: 'refactor',
      name: '♻️ refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'doc',
      name: '📝 doc: Documentation only changes',
    },
    {
      value: 'chore',
      name: "🍕 chore: Changes that don't modify src or test files",
    },
    {
      value: 'style',
      name: '💄 style: Code Style, Changes that do not affect the meaning of the code',
    },
    {
      value: 'test',
      name: '🧪 test: Add missing tests or correcting existing tests',
    },
    {
      value: 'revert',
      name: '⏪ revert: Revert to a commit',
    },
  ],
  
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
