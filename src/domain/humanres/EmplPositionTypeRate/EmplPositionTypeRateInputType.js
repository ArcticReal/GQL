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

const EmplPositionTypeRateInputType = new GraphQLInputObjectType({
  name: 'EmplPositionTypeRateInputType',
  description: 'input type for EmplPositionTypeRate',

  fields: () => ({
    emplPositionTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    rateTypeId: {type: GraphQLString},
    salaryStepSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionTypeRateInputType};
    