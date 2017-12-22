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

const BenefitTypeResponseType = new GraphQLObjectType({
  name: 'BenefitTypeResponseType',
  description: 'response type for BenefitType',

  fields: () => ({
    benefitName: {type: GraphQLString},
    benefitTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    employerPaidPercentage: {type: GraphQLFloat},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BenefitTypeResponseType};
    