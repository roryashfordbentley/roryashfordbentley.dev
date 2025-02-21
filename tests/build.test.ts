import { exec } from 'child_process'
import { describe, it, expect } from 'vitest'
import { existsSync, rmSync } from 'fs'

// Helper to run shell commands
const runCommand = (command: string) => {
  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ stdout, stderr })
      } else {
        resolve({ stdout, stderr })
      }
    })
  })
}

describe('NextJS Build Process', () => {
  it('should build the project successfully', async () => {
    try {
      const { stdout } = await runCommand('npm run build')
      console.log(stdout)
      expect(true).toBe(true) // If no error occurs, the test passes
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error(error)
      }

      expect(true).toBe(false) // Fail the test if an error occurs
    }
  })
})

describe('Storybook Build Process', () => {
  it('should build Storybook successfully', async () => {
    try {
      const { stdout } = await runCommand('npm run build-storybook')
      console.log(stdout)
      expect(true).toBe(true) // If no error occurs, the test passes
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error(error)
      }

      expect(true).toBe(false) // Fail the test if an error occurs
    }
  })
})

describe('Delete Storybook Test folder', () => {
  it('should delete the storybook-static folder if it exists', () => {
    const folderPath = './storybook-static'

    // Check if the folder exists
    if (existsSync(folderPath)) {
      // Delete the folder
      rmSync(folderPath, { recursive: true, force: true })
      console.log(`Deleted folder: ${folderPath}`)
    } else {
      console.log(`Folder does not exist: ${folderPath}`)
    }

    // Verify that the folder no longer exists
    expect(existsSync(folderPath)).toBe(false)
  })
})
