import { PartialModelObject as PMO } from 'objection';

import { Specialization } from '../../src/models';

export const specializations: PMO<Specialization>[] = [
  // https://www.omscs.gatech.edu/specialization-computational-perception-robotics
  {
    id: 'compsci:cpr',
    program_id: 'compsci',
    name: 'Computational Perception & Robotics',
    requirements: [
      {
        type: 'core',
        count: 1,
        courses: [
          'CS-6505',
          'CS-6515',
          'CS-6520',
          'CS-6550',
          'CS-7520',
          'CS-7530',
          'CSE-6140',
        ],
      },
      {
        type: 'core',
        count: 1,
        courses: ['CS-6601', 'CS-7641'],
      },
      {
        type: 'elective',
        count: 3,
        courses: [
          'CS-6475',
          'CS-6476',
          'CS-7499',
          'CS-7630',
          'CS-7631',
          'CS-7633',
          'CS-7636',
          'CS-7638',
          'CS-7639',
          'CS-7648',
          'CS-7649',
          'CS-7650',
          // CS 8803 Special Topics: Multiview Geometry in Computer Vision
        ],
      },
      {
        type: 'elective',
        count: 1,
        courses: [
          'CS-6475',
          'CS-6476',
          'CS-7499',
          'CS-7636',
          'CS-7650',
          // CS 8803 Special Topics: Multiview Geometry in Computer Vision
        ],
      },
      {
        type: 'elective',
        count: 1,
        courses: [
          'CS-7630',
          'CS-7631',
          'CS-7633',
          'CS-7638',
          'CS-7639',
          'CS-7648',
          'CS-7649',
        ],
      },
    ],
  },
  // https://www.omscs.gatech.edu/specialization-computing-systems
  {
    id: 'compsci:cs',
    program_id: 'compsci',
    name: 'Computing Systems',
    requirements: [
      {
        type: 'core',
        count: 1,
        courses: ['CS-6505', 'CS-6515'],
      },
      {
        type: 'core',
        count: 2,
        courses: [
          'CS-6210',
          'CS-6241',
          'CS-6250',
          'CS-6290',
          'CS-6300',
          'CS-6390',
          'CS-6400',
        ],
      },
      {
        type: 'elective',
        count: 3,
        courses: [
          'CS-6035',
          'CS-6200',
          'CS-6210',
          'CS-6220',
          'CS-6235',
          'CS-6238',
          'CS-6241',
          'CS-6250',
          'CS-6260',
          'CS-6262',
          'CS-6263',
          'CS-6290',
          'CS-6291',
          'CS-6300',
          'CS-6310',
          'CS-6340',
          'CS-6365',
          'CS-6390',
          'CS-6400',
          'CS-6422',
          'CS-6505',
          'CS-6515',
          'CS-6550',
          'CS-6675',
          'CS-7210',
          'CS-7260',
          'CS-7270',
          'CS-7280',
          'CS-7290',
          'CS-7292',
          'CS-7560',
          'CS-8803-O04',
          'CS-8803-O05',
          'CS-8803-O06',
          'CS-8803-O08',
          'CS-8803-O11',
          'CS-8803-O12',
          'CS-8803x',
          'CSE-6220',
        ],
      },
    ],
  },
  // https://www.omscs.gatech.edu/specialization-interactive-intelligence
  {
    id: 'compsci:ii',
    program_id: 'compsci',
    name: 'Interactive Intelligence',
    requirements: [
      {
        type: 'core',
        count: 1,
        courses: ['CS-6300', 'CS-6301', 'CS-6505', 'CS-6515'],
      },
      {
        type: 'core',
        count: 2,
        courses: ['CS-6601', 'CS-7620', 'CS-7637', 'CS-7641'],
      },
      {
        type: 'elective',
        count: 2,
        courses: [
          'CS-6440',
          'CS-6460',
          'CS-6465',
          'CS-6471',
		  'CS-6603',
          'CS-6750',
          'CS-6795',
          'CS-7610',
          'CS-7632',
          'CS-7632',
          'CS-7634',
          'CS-7650',
        ],
      },
    ],
  },
  // https://www.omscs.gatech.edu/specialization-machine-learning
  {
    id: 'compsci:ml',
    program_id: 'compsci',
    name: 'Machine Learning',
    requirements: [
      {
        type: 'core',
        count: 1,
        courses: [
          'CS-6505',
          'CS-6515',
          'CS-6520',
          'CS-6550',
          'CS-7510',
          'CS-7520',
          'CS-7530',
          'CSE-6140',
        ],
      },
      {
        type: 'core',
        count: 1,
        courses: ['CS-7641', 'CSE-6740'],
      },
      {
        type: 'elective',
        count: 3,
        courses: [
          'CS-6220',
          'CS-6476',
		  'CS-6603',
          'CS-7535',
          'CS-7540',
          'CS-7545',
          'CS-7616',
          'CS-7626',
          'CS-7642',
          'CS-7643',
          'CS-7644',
          'CS-7646',
          'CS-7650',
          'CSE-6240',
          'CSE-6242',
          'CSE-6250',
          'ISYE-6416',
          'ISYE-6420',
          'ISYE-6664',
        ],
      },
    ],
  },
  // https://pe.gatech.edu/degrees/cybersecurity?section=curriculum
  {
    id: 'cybersec:IS',
    program_id: 'cybersec',
    name: 'Information Security',
    requirements: [
      {
        type: 'core',
        count: 2,
        courses: ['CS-6035', 'PUBP-6725'],
      },
      {
        type: 'core-flex',
        count: 1,
        courses: [
          'CS-6263',
          'CS-6726',
          'ECE-8803a',
          'ECE-8803e',
          'ECE-8803g',
          'INTA-6014',
          'INTA-6450',
          'INTA-8803G',
          'PUBP-6111',
          'PUBP-6501',
          'PUBP-6502',
        ],
      },
      {
        type: 'required',
        count: 4,
        courses: ['CS-6260', 'CS-6238', 'CS-6262', 'CS-6265'],
      },
      {
        type: 'elective',
        count: 2,
        courses: [
          'CS-6210',
          'CS-6250',
          'CS-6300',
          'CS-6400',
          'CS-8803x',
          'CS-8813',
        ],
      },
      {
        type: 'practicum',
        count: 1,
        courses: ['CS-6266'],
      },
    ],
  },
  {
    id: 'cybersec:ES',
    program_id: 'cybersec',
    name: 'Energy Systems',
    requirements: [
      {
        type: 'core',
        count: 2,
        courses: ['CS-6035', 'PUBP-6725'],
      },
      {
        type: 'core-flex',
        count: 1,
        courses: [
          'CS-6238',
          'CS-6260',
          'CS-6262',
          'CS-6265',
          'CS-6726',
          'INTA-6014',
          'INTA-6450',
          'INTA-8803G',
          'PUBP-6111',
          'PUBP-6501',
          'PUBP-6502',
        ],
      },
      {
        type: 'required',
        count: 4,
        courses: ['CS-6263', 'ECE-8803a', 'ECE-8803e', 'ECE-8803g'],
      },
      {
        type: 'elective',
        count: 2,
        courses: [
          'CS-7639',
          'ECE-6320',
          'ECE-6323',
          'ECE-8803c',
          'ECE-8803d',
          'ECE-8803h',
        ],
      },
      {
        type: 'practicum',
        count: 1,
        courses: ['ECE-6266'],
      },
    ],
  },
  {
    id: 'cybersec:p',
    program_id: 'cybersec',
    name: 'Policy',
    requirements: [
      {
        type: 'core',
        count: 2,
        courses: ['CS-6035', 'PUBP-6725'],
      },
      {
        type: 'core-flex',
        count: 1,
        courses: [
          'CS-6238',
          'CS-6260',
          'CS-6262',
          'CS-6263',
          'CS-6265',
          'ECE-8803a',
          'ECE-8803e',
          'ECE-8803g',
        ],
      },
      {
        type: 'required',
        count: 4,
        courses: [
          'CS-6726',
          'INTA-6014',
          'INTA-6450',
          'INTA-8803G',
          'PUBP-6111',
          'PUBP-6501',
          'PUBP-6502',
        ],
      },
      {
        type: 'elective',
        count: 2,
        courses: [
          'CS-6726',
          'INTA-6014',
          'INTA-6450',
          'INTA-8803G',
          'PUBP-6111',
          'PUBP-6501',
          'PUBP-6502',
        ],
      },
      {
        type: 'practicum',
        count: 1,
        courses: ['PUBP-6266'],
      },
    ],
  },
  // https://pe.gatech.edu/degrees/analytics?section=curriculum
  {
    id: 'analytics:at',
    program_id: 'analytics',
    name: 'Analytical Tools',
    requirements: [
      {
        type: 'core',
        count: 3,
        courses: ['CSE-6040', 'ISYE-6501', 'MGT-8803'],
      },
      {
        type: 'core',
        count: 2,
        courses: ['CSE-6242', 'MGT-6203'],
      },
      {
        type: 'elective-stats',
        count: 2,
        courses: [
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6740',
          'ISYE-7406',
		  'ISYE-8803',
        ],
      },
      {
        type: 'elective-ops',
        count: 1,
        courses: ['ISYE-6644', 'ISYE-6669'],
      },
      {
        type: 'elective',
        count: 2,
        courses: [
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6420',
          'ISYE-6644',
          'ISYE-6669',
          'ISYE-6740',
          'ISYE-7406',
		  'ISYE-8803',
        ],
      },
      {
        type: 'elective-extra',
        count: 3,
        courses: [
		  'CS-6400',
          'CS-6601',
          'CS-6750',
          'CS-7637',
		  'CS-7642',
		  'CS-7643',
		  'CS-7646',
          'CSE-6250',
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6420',
          'ISYE-6644',
          'ISYE-6669',
          'ISYE-6740',
          'ISYE-7406',
		  'ISYE-8803',
          'MGT-6311',
          'MGT-8813',
          'MGT-8823',
		  'MGT-8833',
        ],
      },
      {
        type: 'practicum',
        count: 1,
        courses: ['MGT-6748'],
      },
    ],
  },
  {
    id: 'analytics:ba',
    program_id: 'analytics',
    name: 'Business Analytics',
    requirements: [
      {
        type: 'core',
        count: 3,
        courses: ['CSE-6040', 'ISYE-6501', 'MGT-8803'],
      },
      {
        type: 'core',
        count: 2,
        courses: ['CSE-6242', 'MGT-6203'],
      },
      {
        type: 'elective-stats',
        count: 3,
        courses: [
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6420',
          'ISYE-6740',
          'ISYE-7406',
		  'ISYE-8803',
        ],
      },
      {
        type: 'elective-ops',
        count: 1,
        courses: ['ISYE-6644', 'ISYE-6669'],
      },
      {
        type: 'elective-track',
        count: 2,
        courses: ['MGT-6311', 'MGT-8813', 'MGT-8823', 'MGT-8833'],
      },
      {
        type: 'elective-extra',
        count: 3,
        courses: [
          'CS-6400',
          'CS-6601',
          'CS-7637',
		  'CS-7642',
		  'CS-7643',
		  'CS-7646',
          'CSE-6250',
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6420',
          'ISYE-6644',
          'ISYE-6669',
          'ISYE-6740',
          'ISYE-7406',
		  'ISYE-8803',
          'MGT-6311',
          'MGT-8813',
          'MGT-8823',
		  'MGT-8833',
        ],
      },
      {
        type: 'practicum',
        count: 1,
        courses: ['MGT-6748'],
      },
    ],
  },
  {
    id: 'analytics:cda',
    program_id: 'analytics',
    name: 'Computational Data Analytics',
    requirements: [
      {
        type: 'core',
        count: 3,
        courses: ['CSE-6040', 'ISYE-6501', 'MGT-8803'],
      },
      {
        type: 'core',
        count: 2,
        courses: ['CSE-6242', 'MGT-6203'],
      },
      {
        type: 'elective-stats',
        count: 2,
        courses: [
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6420',
          'ISYE-6740',
          'ISYE-7406',
		  'ISYE-8803',
        ],
      },
      {
        type: 'elective-ops',
        count: 1,
        courses: ['ISYE-6644', 'ISYE-6669'],
      },
      {
        type: 'elective-track',
        count: 2,
        courses: [
          'CS-6400',
		  'CS-6601',
		  'CS-6750',
		  'CS-7367',
		  'CS-7642',
		  'CS-7643',
		  'CS-7646',
          'CSE-6250',
          'ISYE-6740',
        ],
      },
      {
        type: 'elective-extra',
        count: 3,
        courses: [
          'CS-6400',
		  'CS-6601',
		  'CS-6750',
		  'CS-7367',
		  'CS-7642',
		  'CS-7643',
		  'CS-7646',
          'CSE-6250',
          'ISYE-6402',
          'ISYE-6414',
          'ISYE-6420',
          'ISYE-6644',
          'ISYE-6669',
          'ISYE-6740',
          'ISYE-7406',
          'ISYE-8803',
          'MGT-6311',
          'MGT-8813',
          'MGT-8823',
		  'MGT-8833',
        ],
      },
      {
        type: 'practicum',
        count: 1,
        courses: ['MGT-6748'],
      },
    ],
  },
];
