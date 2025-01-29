module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',     // New feature
          'fix',      // Bug fix
          'update',   // Improvement to existing feature
          'docs',     // Documentation changes
          'style',    // Code style/formatting
          'refactor', // Code restructuring (no behavior changes)
          'test',     // Test-related changes
          'chore',    // Build/config/tooling changes
          'perf',     // Performance improvements
          'revert',    // Revert previous commit
          'ci'        // CI/CD related changes
        ]
      ],
      'header-max-length': [2, 'always', 72]
    }
  };