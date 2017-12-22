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

const FacilityTypeAttrResponseType = new GraphQLObjectType({
  name: 'FacilityTypeAttrResponseType',
  description: 'response type for FacilityTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString}
  })
});

export {FacilityTypeAttrResponseType};
    