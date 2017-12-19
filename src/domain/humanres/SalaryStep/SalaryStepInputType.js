import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const SalaryStepInputType = new GraphQLInputObjectType({
  name: 'SalaryStepInputType',
  description: 'input type for SalaryStep',

  fields: () => ({
    amount: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    dateModified: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SalaryStepInputType};
    