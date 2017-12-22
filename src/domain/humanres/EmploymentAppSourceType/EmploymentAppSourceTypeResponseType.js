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

const EmploymentAppSourceTypeResponseType = new GraphQLObjectType({
  name: 'EmploymentAppSourceTypeResponseType',
  description: 'response type for EmploymentAppSourceType',

  fields: () => ({
    description: {type: GraphQLString},
    employmentAppSourceTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmploymentAppSourceTypeResponseType};
    