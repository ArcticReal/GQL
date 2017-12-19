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

const EmploymentAppSourceTypeInputType = new GraphQLInputObjectType({
  name: 'EmploymentAppSourceTypeInputType',
  description: 'input type for EmploymentAppSourceType',

  fields: () => ({
    description: {type: GraphQLString},
    employmentAppSourceTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {EmploymentAppSourceTypeInputType};
    