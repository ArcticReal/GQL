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

const FacilityAttributeResponseType = new GraphQLObjectType({
  name: 'FacilityAttributeResponseType',
  description: 'response type for FacilityAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    facilityId: {type: GraphQLString}
  })
});

export {FacilityAttributeResponseType};
    