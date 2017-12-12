
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



const EmploymentAppSourceTypeType = new GraphQLObjectType({
  name: 'EmploymentAppSourceTypeType',
  description: 'Type for EmploymentAppSourceType in humanres',

  fields: () => ({
    parentType: {
      type: EmploymentAppSourceTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (employmentAppSourceType, args, {loaders}) => loaders.ofbiz.load(`humanres/employment/employmentAppSourceTypes/find?employmentAppSourceTypeId=${employmentAppSourceType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    employmentAppSourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    employmentAppSourceTypes: {
      type: new GraphQLList(EmploymentAppSourceTypeType),
      args : {},
      resolve: (employmentAppSourceType, args, {loaders}) => loaders.ofbizArray.load(`humanres/employment/employmentAppSourceTypes/find?employmentAppSourceTypeId=${employmentAppSourceType.employmentAppSourceTypeId}`)
    }
  })
});

export {EmploymentAppSourceTypeType};
    




const EmploymentAppSourceTypeInputType = new GraphQLInputObjectType({
  name: 'EmploymentAppSourceTypeInputType',
  description: 'input type for EmploymentAppSourceType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    employmentAppSourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {EmploymentAppSourceTypeInputType};
    