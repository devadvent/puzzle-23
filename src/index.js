import { findMissing } from './utils/missing.js'

const manifest = [
    '6ff30d23-27dc-4d5b-8d83-6412a872fc49',
    'f3f359f7-e429-4080-9b28-b96365d581e1',
    'ce53036f-8c9e-4dd9-a9e2-9a9469b1313e',
    '9af1d4b6-b194-4548-86c3-2febf995fb54',
    'a856c7aa-4215-4d1b-8e9b-d8ed8e166e12',
    'a6232ec4-0ace-4380-ab3b-a4bebad86f9f',
    'c404603b-8f10-4110-bfe3-608fa1c3d54a',
    'b56a155d-5e86-4a11-bc6c-34abf5cf345d',
    '2f03e2fb-f66f-4fa7-903d-3e4333a1bb62',
    '0825436e-8055-4be3-8c05-fd097378e2b7',
    '0d1d845a-c1c8-4b51-a642-ba7295cf7d1e',
    'b93bd910-bfc0-4482-9058-64137d4f2906',
    'b62cbb10-5239-4e9e-b2de-41ae23665441',
    'fa9c24b2-c101-49d7-a4d6-21da2b0151a4',
    '14dc902d-5513-43af-901d-1366f1004ab4',
    '64497386-e3c1-48f7-8e02-ef684a417193',
]
const sack = [
    '6ff30d23-27dc-4d5b-8d83-6412a872fc49',
    'f3f359f7-e429-4080-9b28-b96365d581e1',
    'ce53036f-8c9e-4dd9-a9e2-9a9469b1313e',
    '9af1d4b6-b194-4548-86c3-2febf995fb54',
    'a856c7aa-4215-4d1b-8e9b-d8ed8e166e12',
    'c404603b-8f10-4110-bfe3-608fa1c3d54a',
    'b56a155d-5e86-4a11-bc6c-34abf5cf345d',
    '2f03e2fb-f66f-4fa7-903d-3e4333a1bb62',
    '0825436e-8055-4be3-8c05-fd097378e2b7',
    '0d1d845a-c1c8-4b51-a642-ba7295cf7d1e',
    'b93bd910-bfc0-4482-9058-64137d4f2906',
    'fa9c24b2-c101-49d7-a4d6-21da2b0151a4',
    '14dc902d-5513-43af-901d-1366f1004ab4',
    '64497386-e3c1-48f7-8e02-ef684a417193',
]

const missingItems = findMissing(manifest, sack)

if (missingItems.length > 0) {
    console.log('Missing items:')
    missingItems.forEach(item => console.log(`- ${item.name} (${item.id})`))
} else {
    console.log('No missing items!')
}
