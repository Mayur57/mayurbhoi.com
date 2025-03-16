module.exports = {
  types: [
    { value: 'feat', name: 'feat:     New feature' },
    { value: 'fix', name: 'fix:      Bug fix' },
    { value: 'update', name: 'update:   Improvement to existing feature' },
    { value: 'docs', name: 'docs:     Documentation changes' },
    { value: 'style', name: 'style:    Code formatting' },
    { value: 'refactor', name: 'refactor: Code restructuring' },
    { value: 'test', name: 'test:     Test-related changes' },
    { value: 'chore', name: 'chore:    Build/config/tooling' },
    { value: 'perf', name: 'perf:     Performance improvements' },
    { value: 'revert', name: 'revert:   Revert changes' },
    { value: 'ci', name: 'ci:       CI/CD changes' },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
}
