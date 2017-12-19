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

const FacilityAttributeInputType = new GraphQLInputObjectType({
  name: 'FacilityAttributeInputType',
  description: 'input type for FacilityAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    facilityId: {type: GraphQLString}
  })
});

export {FacilityAttributeInputType};
    