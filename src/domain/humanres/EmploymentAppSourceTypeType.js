
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const EmploymentAppSourceTypeType = new GraphQLObjectType({
  name: 'EmploymentAppSourceTypeType',
  description: 'Type for EmploymentAppSourceType in humanres',

  fields: () => ({
    parentType: {
      type: EmploymentAppSourceTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (employmentAppSourceType, args, {loaders}) => loaders.ofbiz.load(`employmentAppSourceTypes/find?employmentAppSourceTypeId=${employmentAppSourceType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    employmentAppSourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    employmentAppSourceType: {
      type: new GraphQLList(EmploymentAppSourceTypeType),
      args : {employmentAppSourceTypeId: {type: GraphQLString}},
      resolve: (employmentAppSourceType, args, {loaders}) => loaders.ofbizArray.load(`employmentAppSourceTypes/find?employmentAppSourceTypeId=${employmentAppSourceType.employmentAppSourceTypeId}`)
    }
  })
});

export {EmploymentAppSourceTypeType};
    